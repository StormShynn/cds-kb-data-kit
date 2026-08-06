---
name: I_SLCMGMTQNAIRETRNSLTNSTSAPI01
description: Slcmgmtqnairetrnsltnstsapi 01
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
  - component:SLC-EVL
  - lob:Other
---
# I_SLCMGMTQNAIRETRNSLTNSTSAPI01

**Slcmgmtqnairetrnsltnstsapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SLCQnaireTranslationUUID` | `SLCQnaireTranslationUUID` |
| `SLCQnaireUUID` | `SLCQnaireUUID` |
| `SLCQnaireTgtTranslationLang` | `SLCQnaireTgtTranslationLang` |
| `SLCQnaireTgtTranslationLangSts` | `SLCQnaireTgtTranslationLangSts` |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Translation Status of Questionnaire' //same as DDL description
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISLCQNRTRASAPI01'

define view I_SLCMgmtQnaireTrnsltnStsAPI01
  as select from I_SLCQnaireTranslationSts
{
  key SLCQnaireTranslationUUID,
      SLCQnaireUUID,
      SLCQnaireTgtTranslationLang,
      SLCQnaireTgtTranslationLangSts
}
```
