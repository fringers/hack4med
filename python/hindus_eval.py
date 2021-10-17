import pickle
import pandas as pd
import numpy as np

labels_in_data = [
    'WIEK', 
#                    'PLEC', 
#                    'n58.11.11342_pct', 
#                    'i81.11.1112_crp', 
#                    'g49.122.1113_dd', 
#                    'm05_il-6', 
#                    'o59_tnhs', 
#                    'n11.126.20.1cito_mlecz',
#                    'm37.11.191_krea', 
#                    'c55.103.02_wbc', 
#                    'c55.103.02_plt', 
#                    'WZROST', 
#                    'MASA_CIALA', 
                   'BMI', 
                   'RRS', 
#                    'RRD', 
#                    'PO2_ATM',   # z tym nie dzialalo
#                    'ODDECH', 
                   'AS', 
#                    'NT', 
#                    'DM', 
                   'ASTMA', 
                   'POCHP', 
                   'HF', 
                   'AF', 
                   'UDAR', 
                   'CHD', 
#                    'MI', 
                   'ZAP_PLUC', 
                   'PCHN', 
#                    'DEKSAMETEZON', # z tym tez nie dziala
                   'HDCZ', 
                   'BB',
                   'STATYNA', 
#                    'ASA', 
                   'NOAC', 
#                    'MRA', 
                   'ACE', 
                   'SARTANY', 
                   'CA_BLOKER'
                  ]
    
def filter_data(df):
    df = df.filter(labels_in_data)
    
    df = df.applymap(lambda x: x.strip().lower() if isinstance(x, str) else x)
    
    df = df.replace('nie', 0)
    df = df.replace('nie wiadomo', 1)
    df = df.replace('tak', 2)
    
    df = df.replace('covid', 1)
    df = df.replace('inny (współistniejący covid)', 1)
     
#     df = df.astype({"POCHP": int, "HF": int, "CHD": int, "PCHN": int})
#     df = df.astype({"WIEK": int, "PCHN": int, "DEKSAMETEZON": int})
    
    df = df.fillna(0)
    
#     df = df.rename(columns={"N58.11.11342_PCT": "n58.11.11342_pct", "G49.122.1113_DD": "g49.122.1113_dd", "M05_IL-6": "m05_il-6", "O59_TNHS": "o59_tnhs", "M37.11.191_KREA": "m37.11.191_krea", "C55.103.02_WBC": "c55.103.02_wbc"})
    
    df = df.applymap(lambda x: x.replace('<', '') if isinstance(x, str) else x)
    df = df.applymap(lambda x: x.replace('>', '') if isinstance(x, str) else x)
    df = df.applymap(lambda x: x.replace(',', '.') if isinstance(x, str) else x)
    df = df.applymap(lambda x: x.replace(' mg/l', '') if isinstance(x, str) else x)
    df = df.applymap(lambda x: x.strip() if isinstance(x, str) else x)
    
#     df = df.applymap(lambda x: 0 if isinstance(x, str) else x)
#     df = df.astype({"n58.11.11342_pct": float, 'g49.122.1113_dd': float, 'm05_il-6': float, 'o59_tnhs': float, 'm37.11.191_krea': float, 'c55.103.02_wbc': float})
    
    return df

def mahalanobis(x, data_mean, inv_covmat):
    x_mu = x - data_mean
    left = np.dot(x_mu, inv_covmat)
    mahal = np.dot(left, x_mu.T)
    return mahal.diagonal()

def predict(bad, data_mean_bad, good, data_mean_good, test):
    test['mahalanobis_bad'] = mahalanobis(test[labels_in_data], data_mean_bad, bad)
    test['mahalanobis_good'] = mahalanobis(test[labels_in_data], data_mean_good, good)
    
    test['mahalanobis_ZGON_LUB_OIT'] = test['mahalanobis_bad'] <= test['mahalanobis_good']

    return test



def main():
    with open('hindus_model.dat', 'rb') as file:
        data = pickle.load(file)

    test = pd.read_csv('BAZA_VALID_INPUT.csv')
    test = filter_data(test)
    
    result = predict(data[0], data[1], data[2], data[3], test)
    
    with open('output.txt', 'w+') as f:
        for index, row in result.iterrows():
            if row['mahalanobis_ZGON_LUB_OIT'] == True:  
                f.write(f'1\n')
            else:  
                f.write(f'0\n')


if __name__ == '__main__':
    main()
