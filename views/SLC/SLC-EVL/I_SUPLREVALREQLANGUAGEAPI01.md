---
name: I_SUPLREVALREQLANGUAGEAPI01
description: Suplrevalreqlanguageapi 01
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - language
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLREVALREQLANGUAGEAPI01

**Suplrevalreqlanguageapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SuplrEvalReqLanguageUUID` | ✓ | |  |  |
| `SuplrEvalReqUUID` |  | |  |  |
| `SuplrEvalReqQuestionnaireUUID` |  | |  |  |
| `Language` |  | |  |  |
| `IsSelectedLanguage` |  | |  |  |
| `IsMasterLanguage` |  | |  |  |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Language of Supplier Evaluation Request'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISEVREQLANGAPI01'
define view I_SuplrEvalReqLanguageAPI01
  as select from I_SupplierEvalRequestLanguage{
  
  key SuplrEvalReqLanguageUUID,
      SuplrEvalReqUUID,
      SuplrEvalReqQuestionnaireUUID,
      Language,
      IsSelectedLanguage,
      IsMasterLanguage
}
```
