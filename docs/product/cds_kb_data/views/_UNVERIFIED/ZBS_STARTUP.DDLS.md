---
name: ZBS_STARTUP.DDLS
description: "Table for StartUp"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Xexer/abap-table-entities-example/blob/946ffa4a7318671b9419aca6dabec4c6c063a1b5/src/zbs_startup.ddls.asddls
semantic_en: "Table for StartUp — CDS view."
semantic_vi: "Table for StartUp — CDS view dựa trên Table for StartUp."
keywords:
  - "table"
  - "for"
  - "startup"
  - "start"
  - "name"
  - "description"
  - "company"
  - "register"
  - "rating"
tags:
  - LE
  - component:LE
  - lob:logistics execution
---
# ZBS_STARTUP.DDLS

**Table for StartUp**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Xexer/abap-table-entities-example/blob/946ffa4a7318671b9419aca6dabec4c6c063a1b5/src/zbs_startup.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ZBS_ST_StartUpID` |  | |  | `key StartUpID : ZBS_ST_StartUpID` |  |  |
| `StartUpName` |  | |  | `abap.char(50)` |  |  |
| `Description` |  | |  | `abap.char(200)` |  |  |
| `CompanyRegisterID` |  | |  | `abap.char(20)` |  |  |
| `Rating` |  | |  | `ZBS_SE_Ranking` |  |  |
| `ZBS_Employee` |  | |  | `_Employee : composition of exact one to many ZBS_Employee` |  |  |
| `ZBS_Investor` |  | |  | `_Investor : composition of exact one to many ZBS_Investor` |  |  |

## Source Code

*Source: [https://github.com/Xexer/abap-table-entities-example/blob/946ffa4a7318671b9419aca6dabec4c6c063a1b5/src/zbs_startup.ddls.asddls](https://github.com/Xexer/abap-table-entities-example/blob/946ffa4a7318671b9419aca6dabec4c6c063a1b5/src/zbs_startup.ddls.asddls)*

```abap
@AbapCatalog.deliveryClass: #APPLICATION_DATA
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.type: #CLIENT_DEPENDENT
@EndUserText.label: 'Table for StartUp'
define root table entity ZBS_StartUp
{
  key StartUpID         : ZBS_ST_StartUpID;
      @EndUserText.label: 'Name of the StartUp'
      StartUpName       : abap.char(50);
      @EndUserText.label: 'Description'
      Description       : abap.char(200);
      @EndUserText.label: 'Register Number'
      CompanyRegisterID : abap.char(20);
      Rating            : ZBS_SE_Ranking;
      
      _Employee : composition of exact one to many ZBS_Employee;
      _Investor : composition of exact one to many ZBS_Investor;
}
```
