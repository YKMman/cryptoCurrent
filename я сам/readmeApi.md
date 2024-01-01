# POST /user/register
## Входные параметры
### Body:
```json
{
    "login":string      - обязательный  
	"password":string   - обязательный  
	"email":string      - обязательный
}
```  
## Ответ:
### Код:
#### 400:
Если не соблюден формат параметров;   
Параметров не хватает;  
Пользователь с введенным логином (потом добавить проверку на email) зарегестирован;

### Код:
#### 200:
Пользователь зарегестрирован


# POST /user/auth
## Входные параметры
### Body:
```json
{
    "login":string      - обязательный  
	"password":string   - обязательный  
}  
```
## Ответы:
### Код:
#### 400:
Если не соблюден формат параметров;   
Параметров не хватает;  
Введены неверные данные авторизации;
### Body:
```json
{
    "message":string
}  
```
### Код:
#### 200:
Пользователь успешно авторизирован 
### Body:
```json
{
    "AuthToken":string
    "TTL":time
}
```
### Cookie:
```json
{
    "auth"
}
```







# GET /user
## Входные параметры:
### Cookie:
```json
{
    "auth"
}
```
## Ответы:
### Код:
#### 401:
Пользователь не авторизирован
### Body:
```json
{
    "message":string
}  
```
### Код:
#### 200:
Возвращает информацию о пользователе
### Body:
```json
{
    "login":string
    "Wallet":
        {
            "USD":number
            "BTC":number
            "ETH":number
        }
    "WalletLinks":
        {
            "BTC":string
            "ETH":string
        }
}
```








# POST /user/exchange
## Входные параметры:
### Cookie:
```json
{
    "auth"
}
```
### Body:
```json
{
    "to_recieve":{
        "value": double (кол-во монет которые хотим продать)
        "send_name": "BTC" (символ монеты которую хотим продать)
        "receive_name": "USDT" (символ монеты которую хотим получить)
    }
    "to_get":{
        "value": double (кол-во моент которые хотим получить)
        "send_name": "BTC" (символ монеты которую хотим продать)
        "receive_name": "USDT" (символ монеты которую хотим получить)
}
```
## Ответы:
### Код:
#### 401:
Пользователь не авторизирован
### Код:
#### 200:
Транзакция успешна








# POST /user/transfer
## Входные параметры:
### Cookie:
```json
{
    "auth"
}
```
### Body:
```json
{
    "to_transfer":
    {
        "target_login": string
        "ETH": double
        "USDT": double
        "BTC": double
    }
}
```
## Ответы:
### Код:
#### 401:
Пользователь не авторизирован
### Код:
#### 200:
Транзакция успешна











# POST /user/withdrawal
## Входные параметры:
### Cookie:
    {
    "auth"
    }
### Body:
```json
{
    "to_withdrawal":
    {
        "BTC":
        {
            "public_key":string
            "value":double
        }
        "ETH":
        {
            "public_key":string
            "value":double
        }
        "USDT":
        {
            "public_key":string
            "value":double      
        }
    }
}
```    
## Ответы:
### Код:
#### 401:
Пользователь не авторизирован
### Код:
#### 200:
Транзакция успешна
### Body:
```json
{

}
```