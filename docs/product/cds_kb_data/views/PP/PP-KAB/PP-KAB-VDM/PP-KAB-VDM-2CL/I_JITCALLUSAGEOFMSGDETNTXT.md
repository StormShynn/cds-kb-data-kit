---
name: I_JITCALLUSAGEOFMSGDETNTXT
description: "Jitcallusageofmsgdetntxt"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_JITCALLUSAGEOFMSGDETNTXT

**Jitcallusageofmsgdetntxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallUsageOfMsgDetn` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as pabmsd)` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |  |  |
| `JITCallUsageOfMsgDetnName` |  | |  | `cast(ddtext as vdm_pabmsd_text preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_JITCallUsageOfMsgDetn` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITCallUsageOfMsgDetn` | `I_JITCallUsageOfMsgDetn` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJITUSGMSGDETTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'JIT Call Usage of Message Determination - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'JITCallUsageOfMsgDetn'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

define view I_JITCallUsageOfMsgDetnTxt
  as select from dd07t
  association [1..1] to I_JITCallUsageOfMsgDetn  as _JITCallUsageOfMsgDetn    on $projection.JITCallUsageOfMsgDetn = _JITCallUsageOfMsgDetn.JITCallUsageOfMsgDetn
  association [0..1] to I_Language               as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_JITCallUsageOfMsgDetn'
  key cast(substring(domvalue_l, 1, 1) as pabmsd)                   as JITCallUsageOfMsgDetn,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(ddlanguage as spras preserving type)                     as Language,

      @Semantics.text: true         
      cast(ddtext as vdm_pabmsd_text preserving type)               as JITCallUsageOfMsgDetnName,
      
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,

      _JITCallUsageOfMsgDetn,
      _Language

}
where
      domname  = 'PABMSD'
  and as4local = 'A';
```
