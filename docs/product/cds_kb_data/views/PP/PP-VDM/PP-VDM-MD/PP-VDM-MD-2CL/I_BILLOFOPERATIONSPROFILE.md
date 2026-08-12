---
name: I_BILLOFOPERATIONSPROFILE
description: "Bill of Operations Profile"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSPROFILE')/$value
semantic_en: "Bill of Operations Profile"
semantic_vi: "Bill of Operations Profile — CDS view giao diện dựa trên tca41."
keywords:
  - "bill"
  - "operations"
  - "profile"
  - "application"
  - "operation"
  - "control"
  - "auto"
  - "increment"
  - "number"
  - "relationship"
  - "type"
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_BILLOFOPERATIONSPROFILE

**Bill of Operations Profile**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsApplication` | ✓ | |  | `plnaw` | `CHAR(1)` | Application of the task list |
| `BillOfOperationsProfile` | ✓ | |  | `profidnetz` | `CHAR(7)` | Profile |
| `OperationControlKey` |  | |  | `steus_work` | `CHAR(4)` | Control key for internal activities |
| `OperationAutoIncrementNumber` |  | |  | `cast (tca41.vornr_del as vdm_pp_opincrement)` | `NUMC(4)` | Operation Increment |
| `OperationRelationshipType` |  | |  | `aob_key` | `CHAR(1)` | Key: View of relationships |
| `ChangeRule` |  | |  | `chrule` | `CHAR(1)` | Change Rule |
| `_Appl` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Appl` | `I_BOOApplication` | [1..1] |
| `_Text` | `I_BillOfOperationsProfileText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSPROFILE')/$value)*

```abap
//@AbapCatalog.sqlViewName: 'IPPBOOPROF'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
//@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@ClientHandling.algorithm: #SESSION_VARIABLE
//@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@EndUserText.label: 'Bill of Operations Profile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING}
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BillOfOperationsProfile'
@ObjectModel.sapObjectNodeType.name: 'BillOfOperationsProfile'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL

//define view I_BillOfOperationsProfile
define view entity I_BillOfOperationsProfile
  as select from tca41 as tca41
  association [1..1] to I_BOOApplication              as _Appl on  $projection.BillOfOperationsApplication = _Appl.BillOfOperationsApplication
  association [0..*] to I_BillOfOperationsProfileText as _Text on  $projection.BillOfOperationsApplication = _Text.BillOfOperationsApplication
                                                               and $projection.BillOfOperationsProfile     = _Text.BillOfOperationsProfile
{
      @ObjectModel.foreignKey.association: '_Appl'
  key tca41.plnaw      as BillOfOperationsApplication,
  key tca41.profidnetz as BillOfOperationsProfile,
      tca41.steus_work as OperationControlKey,
      cast (tca41.vornr_del as vdm_pp_opincrement) as OperationAutoIncrementNumber,
      tca41.aob_key    as OperationRelationshipType,
      tca41.chrule     as ChangeRule,
      /* Associations */
      _Appl,
      _Text
}
```
