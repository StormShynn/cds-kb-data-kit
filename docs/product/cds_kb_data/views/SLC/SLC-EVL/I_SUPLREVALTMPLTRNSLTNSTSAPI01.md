---
name: I_SUPLREVALTMPLTRNSLTNSTSAPI01
description: "Suplrevaltmpltrnsltnstsapi 01"
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SUPLREVALTMPLTRNSLTNSTSAPI01

**Suplrevaltmpltrnsltnstsapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalTmplTranslationUUID` | ✓ | |  |  |  |  |
| `SuplrEvalTemplateUUID` |  | |  |  |  |  |
| `SuplrEvalTmplTranslTgtLang` |  | |  |  |  |  |
| `SuplrEvalTmplTranslTgtLangSts` |  | |  |  |  |  |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Translation Status of Eval Template'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISEVTMPTRSTAPI01'
define view I_SuplrEvalTmplTrnsltnStsAPI01
  as select from I_SuplrEvalTmplTranslationSts

{
  key SuplrEvalTmplTranslationUUID,
      SuplrEvalTemplateUUID,
      SuplrEvalTmplTranslTgtLang,
      SuplrEvalTmplTranslTgtLangSts
}
```
