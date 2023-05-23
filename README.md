# Backend prisma

La API de Prisma ofrece una variedad de endpoints que te permiten interactuar con diferentes funcionalidades y datos del sistema.

## Tabla de contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Endpoints](#endpoints)

## Tabla de endpoints
- [Auth](#auth)
- [User routes](#user-routes)
- [Companies routes](#companies-routes)
- [Companies/Locations routes](#companieslocations-routes)
- [Companies/CustomerFields routes](#companiescustomerfields-routes)
- [Companies/WorkerFields routes](#companiesworkerfields-routes)
- [Companies/AditionalCost routes](#companiesaditionalcosts-routes)
- [Positions routes](#positions-routes)
- [Tags routes](#tags-routes)
- [Terms routes](#terms-routes)
- [Modes routes](#modes-routes)
- [Schedule routes](#schedule-routes)
- [Quotes routes](#quotes-routes)
- [Customers routes](#customers-routes)
- [Workers routes](#workers-routes)
- [Plans routes](#plans-routes)
- [Plans/places routes](#plansplaces-routes)
- [Stalls routes](#stalls-routes)
- [NoveltyTables routes](#noveltytables-routes)
- [SubstituteTables routes](#substitutetables-routes)
- [WebSocket](#websocket)

## Requisitos

requisitos necesarios para ejecutar el proyecto:

- Versión de Go 1.19.5

## Instalación

Una vez hayas clonado el repositorio, simplemente ejecuta el siguiente comando:

```bash

git clone git@github.com:JuanCManchegoH/goprisma.git
cd goprisma
go run main.go

```

# Endpoints

## Auth
- POST /signup 
```json
{
  "email": "",
  "password": "",
  "name": "",
  "company": "",
  "location": "",
  "roles": [],
  "image": "",
  "desertref": ""
}
```
- POST /login

```json
{
  "email": "",
  "password": "",
}
```

## User routes
- GET /profile
- GET /users/list/{companyId}
- PATCH /users/update/{id}

```json
{
  "name": "",
  "email": "",
  "company": "",
  "location": "",
  "roles": [],
  "active": false,
  "image": "",
  "desertref": ""
}
```
- PATCH /users/update/roles/{id}

```json
{
  "_id": "",
  "roles": []
}
```
- DELETE /users/delete/{id}

## Companies routes
- POST /companies

```json
{
  "name": "",
  "db": "",
  "email": "",
  "website": "",
  "city": "",
  "nit": "",
  "desertref": "",
  "logo": "",
  "logoPdf": "",
  "desertrefPdf": "",
  "primaryColor": "",
  "secondaryColor": ""
}
```
- GET /companies/findone/{id}
- GET /companies/list
- GET /companies/CompanyData/location/{location}
- PATCH /companies/update/{id}

```json
{
  "name": "",
  "email": "",
  "website": "",
  "addsInStall": false,
  "city": "",
  "nit": "",
  "desertref": "",
  "logo": "",
  "logoPdf": "",
  "desertrefPdf": "",
  "primaryColor": "",
  "secondaryColor": "",
  "active": false
}
```
- DELETE /companies/delete/{id}

## Companies/Locations routes
- PATCH /companies/addLocation/{id}

```json
{
  "name": "",
  "email": "",
  "city": ""
}
```
- PATCH /companies/updateLocation/{id}/location/{location}

```json
{
  "name": "",
  "email": "",
  "city": ""
}
```
- PATCH /companies/removeLocation/{id}/location/{location}

## Companies/CustomerFields routes
- PATCH /companies/addCustomerField/{id}

```json
{
  "location": "",
  "name": "",
  "value": "",
  "type": "",
  "size": 0,
  "required": false
}
```
- PATCH /companies/updateCustomerField/{id}/field/{field}

```json
{
  "location": "",
  "name": "",
  "value": "",
  "type": "",
  "size": 0,
  "required": false
}
```
- PATCH /companies/removeCustomerField/{id}/field/{field}

## Companies/WorkerFields routes
- PATCH /companies/addWorkerField/{id}

```json
{
  "location": "",
  "name": "",
  "value": "",
  "type": "",
  "size": 0,
  "required": false
}
```
- PATCH /companies/updateWorkerField/{id}/field/{field}

```json
{
  "location": "",
  "name": "",
  "value": "",
  "type": "",
  "size": 0,
  "required": false
}
```
- PATCH /companies/removeWorkerField/{id}/field/{field}

## Companies/AditionalCost routes
- POST /aditionalCosts

```json
{
  "location": "",
  "year": "",
  "value": 0.0
}
```
- GET /aditionalCosts/list
- GET /aditionalCosts/locList/{year}
- GET /aditionalCosts/comList/{company}
- PATCH /aditionalCosts/update/{id}

```json
{
  "year": "",
  "value": 0.0
}
```
- DELETE /aditionalCosts/delete/{id}

## Positions routes
- POST /positions

```json
{
  "location": "",
  "name": "",
  "description": ""
}
```
- GET /positions/list
- GET /positions/locList
- GET /positions/comList/{company}
- PATCH /positions/update/{id}
```json
{
  "name": "",
  "description": "",
  "active": false
}
```
- DELETE /positions/delete/{id}

## Tags routes
- POST /tags
```json
{
    "location": "",
    "name": "name",
    "description": "description",
    "value": "value",
    "active": "active"
}
```
- GET /tags/list
- GET /tags/locList
- GET /tags/comList/{company}
- PATCH /tags/update/{id}
```json
{
    "name": "name",
    "description": "description",
    "value": "value",
    "active": "active"
  }
```
- DELETE /tags/delete/{id}

## Terms routes
- POST /terms
```json
{
  "location": "",
  "name": "",
  "initials": "",
  "color": "",
  "defaultHs": 0.0,
  "suggested": false,
  "startTime": "",
  "endTime": ""
}
```
- GET /terms/list
- GET /terms/locList
- GET /terms/comList/{company}
- PATCH /terms/update/{id}
```json
{
  "name": "",
  "initials": "",
  "color": "",
  "defaultHs": 0.0,
  "startTime": "",
  "suggested": false,
  "endTime": "",
  "active": false
}
```
- DELETE /terms/delete/{id}
- PATCH /terms/addSuggest  (agrega suggestes a los terminos)

## Modes routes
- POST /modes
```json
{
  "location": "",
  "name": "",
  "description": "",
  "sequence": []
}
```
- GET /modes/list
- GET /modes/locList
- GET /modes/comList/{company}
- PATCH /modes/update/{id}
```json
{
  "name": "",
  "description": "",
  "sequence": [],
  "active": false
}
```
- DELETE /modes/delete/{id}

## Schedule routes
- POST /schedules
```json
{
  "location": "",
  "hours": 0
}
```
- GET /schedules/list
- GET /schedules/locList
- GET /schedules/comList/{company}
- PATCH /schedules/update/{id}
```json
{
  "hours": 0,
  "active": false
}
```
- DELETE /schedules/delete/{id}

## Quotes routes
comming soon :)

## Customers routes
- POST /customers
```json
{
  "name": "",
  "identification": "",
  "city": "",
  "customerFields": []
}
```
- GET /customers/findone/{id}
- GET /customers/list/{name}/{limit}/{skip}
- GET /customers/all
- PATCH /customers/update/{id}
```json
{
  "name": "",
  "identification": "",
  "city": "",
  "customerFields": [],
  "active": false
}
```
- DELETE /customers/delete/{id}
- PATCH /customers/ActiveCustomer
```json
{
  "customers": [],
  "active": false
}
```
- GET /customers/amount

## Workers routes
- POST /workers
```json
{
  "name": "",
  "identification": "",
  "city": "",
  "workerFields": [{
    "name": "",
    "value": "",
    "type": "",
    "size": 0,
    "required": false,
    "active": false
   }]
}
```
- GET /workers/findone/{id}
- GET /workers/findByIdentification/{identification}
- GET /workers/list/{name}/{limit}/{skip}
- GET /workers/all
- POST /workers/array
```json
{
  "workers": []
}

```
- PATCH /workers/ActiveWorkers
```json
{
  "workers": [],
  "active": false
}
```
- GET /workers/amount
- GET /workers/stats/{startDate}/{endDate}
- GET /workers/tracking/{startDate}/{endDate}
- GET /workers/tracking/list/{name}/{limit}/{skip}/{startDate}/{endDate}
- POST /workers/notInArray
```json
{
  "workers": []
}

```
- PATCH /workers/update/{id}
```json
{
  "name": "",
  "identification": "",
  "city": "",
  "workerFields": [{
  "name": "",
  "value": "",
  "type": "",
  "size": 0,
  "required": false,
  "active": false
}],
  "active": false
}
```
- DELETE /workers/delete/{id}
- GET /workers/legacy

# Plans routes

- POST /plans
```json
{
  "name": "",
  "startDate": "",
  "endDate": "",
  "places": [],
  "customer": "",
  "customerName": ""
}
```
- GET /plans/getAll/{location}/{startDate}/{endDate}
- GET /plans/actives/{customer}
- GET /plans/getActives/{customer}
- GET /plans/findByDates/{customer}/{startDate}/{endDate}
- PATCH /plans/update/{id}
```json
{
  "name": "",
  "suggested": false,
  "saved": false
}
```
- DELETE /plans/delete/{id}

# Plans/Places routes

- PATCH /plans/addPlace/{id}
```json
{
  "name": ""
}
```
- PATCH /plans/updatePlace/{id}/place/{place}
- PATCH /plans/removePlace/{id}/place/{place}

# Suggest Plan routes

- POST /plans/suggest/{id}
```json
{
  "name": "",
  "startDate": "",
  "endDate": ""
}
```

# Stalls routes

- POST /stalls
```json
{
  "name": "",
  "description": "",
  "schedule": 0,
  "startDate": "",
  "endDate": "",
  "workers": [],
  "statuses": [],
  "days": [],
  "place": "",
  "plan": ""
}
```
- PATCH /stalls/update/{id}
```json
{
  "_id": "",
  "name": "",
  "description": "",
  "schedule": 0,
  "place": "",
  "stallMode": 0,
  "days": [{
  "name": "",
  "hours": 0
}]
}
```
- PATCH /stalls/addworker/{id}
```json
{
  "ref": "",
  "workerName": "",
  "identification": "",
  "salary": 0,
  "position": "",
  "mode": "",
  "secuenceIndex": 0,
  "secuenceJump": 0,
  "stallMode": 0
}
```
- PATCH /stalls/removeworker/{id}/worker/{worker}
- PATCH /stalls/fastUpdate/{id}
```json
{
  "worker": "",
  "mode": "",
  "sequence": [],
  "index": 0,
  "jump": 0
}
```
- PATCH /stalls/updateStatus/{id}
```json
{
  "ref": "",
  "name": "",
  "initials": "",
  "color": "",
  "date": "",
  "worker": "",
  "workedHs": 0.0,
  "value": 0,
  "tag": "",
  "startTime": "",
  "endTime": ""
}
```
- PATCH /stalls/updateStatuses/{id}
```json
{
  "ref": "",
  "name": "",
  "initials": "",
  "color": "",
  "dates": [],
  "worker": "",
  "workedHs": 0.0,
  "value": 0,
  "tag": "",
  "startTime": "",
  "endTime": ""
}
```
- PATCH /stall/updateMultipleStatuses/{id}
```json
{
  "statuses": [
    {
        "ref": "",
        "name": "",
        "initials": "",
        "color": "",
        "dates": [],
        "worker": "",
        "workedHs": 0.0,
        "value": 0,
        "tag": "",
        "startTime": "",
        "endTime": ""
    }
  ]
}
```
- DELETE /stalls/delete/{id}
- GET /stalls/legacy

# NoveltyTables routes

- PATCH /noveltyTables/addNovelty/{id}
```json
{
  "name": "",
  "description": "",
  "color": "",
  "initials": "",
  "workedHs": 0.0,
  "startTime": "",
  "endTime": "",
  "value": 0,
  "dates": [],
  "worker": "",
  "workerName": "",
  "workerIdentification": "",
  "stall": "",
  "stallName": "",
  "stallMode": 0,
  "plan": "",
  "tag": "",
  "customerName": ""
}
```
- PATCH /noveltyTables/addMultipleNovelties/{id}
```json
{
  "novelties": [
    {
        "name": "",
        "description": "",
        "color": "",
        "initials": "",
        "workedHs": 0.0,
        "startTime": "",
        "endTime": "",
        "value": 0,
        "dates": [],
        "worker": "",
        "workerName": "",
        "workerIdentification": "",
        "stall": "",
        "stallName": "",
        "stallMode": 0,
        "plan": "",
        "tag": "",
        "customerName": ""
    }
  ]
}
```
- PATCH /noveltyTables/AddAppendNovelty/{noveltyTableId}/{noveltyId}
```json
{
  "description": ""
}
```
- POST /noveltyTable/ActiveNovelties/{id}
```json
{
  "novelties": [],
  "active": false
}
```
- PATCH /noveltyTable/ActiveAppend/{noveltyTableId}/{noveltyId}
```json
{
  "appends": [],
  "active": false
}
```
- PATCH /noveltyTables/removeNovelty/{id}/novelty/{novelty}
- DELETE /noveltyTables/delete/{id}

# SubstituteTables routes

- PATCH /substituteTables/addSubstitutes/{id}
```json
{
  "name": "",
  "description": "",
  "color": "",
  "initials": "",
  "workedHs": 0.0,
  "startTime": "",
  "endTime": "",
  "value": 0,
  "date": "",
  "worker": "",
  "workerName": "",
  "workerIdentification": "",
  "stall": "",
  "stallName": "",
  "stallMode": 0,
  "plan": "",
  "tag": "",
  "customerName": ""
}
```
- PATCH /substituteTables/removeSubstitute/{id}/substitute/{substitute}
- DELETE /substituteTables/delete/{id}
- PATCH /substituteTables/addMultipleSubstitutes/{id}
```json
{
  "substitutes": [
    {
        "name": "",
        "description": "",
        "color": "",
        "initials": "",
        "workedHs": 0.0,
        "startTime": "",
        "endTime": "",
        "value": 0,
        "dates": [],
        "worker": "",
        "workerName": "",
        "workerIdentification": "",
        "stall": "",
        "stallName": "",
        "stallMode": 0,
        "plan": "",
        "tag": "",
        "customerName": ""
    }
  ]
}
```
- PATCH /substituteTables/AddAppendSubstitute/{substituteTableId}/{substituteId}
```json
{
  "description": ""
}
```
- POST /substituteTables/ActiveSubstitutes/{id}
```json
{
  "substitutes": [],
  "active": false
}
```
- PATCH /substituteTables/ActiveAppend/{substituteTableId}/{substituteId}
```json
{
  "appends": [],
  "active": false
}
```

# WebSocket

- /ws/{Authorization}


## Thanks for whaching

[Mas Informacion](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
