---
name: I_DEBITMEMOREQUESTTYPETEXT
description: Debitmemorequesttypetext
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - text-view
  - text
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQUESTTYPETEXT

**Debitmemorequesttypetext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebitMemoRequestType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `DebitMemoRequestTypeName` |  | |  | `cast( Text.SalesDocumentTypeName as sd_debit_memo_req_type_name preserving type )` |  |  |
| `_DebitMemoRequestType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DebitMemoRequestType` | `I_DebitMemoRequestType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Consumption.ranked: true
@EndUserText.label: 'Debit Memo Request Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'DebitMemoRequestType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_DebitMemoRequestTypeText
  as select from I_SalesDocumentTypeText as Text
    inner join   I_DebitMemoRequestType  as DebitMemoRequestType on Text.SalesDocumentType = DebitMemoRequestType.DebitMemoRequestType

  association [0..1] to I_DebitMemoRequestType as _DebitMemoRequestType on $projection.DebitMemoRequestType = _DebitMemoRequestType.DebitMemoRequestType

{
      @ObjectModel.foreignKey.association: '_DebitMemoRequestType'
      @ObjectModel.text.element: ['DebitMemoRequestTypeName']
  key DebitMemoRequestType.DebitMemoRequestType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Text.Language,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.9,
        ranking: #LOW }
      @Semantics.text: true
      cast( Text.SalesDocumentTypeName as sd_debit_memo_req_type_name preserving type ) as DebitMemoRequestTypeName,

      _DebitMemoRequestType,
      Text._Language
}
```
