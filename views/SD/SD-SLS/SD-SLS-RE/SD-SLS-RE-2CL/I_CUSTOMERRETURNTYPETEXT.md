---
name: I_CUSTOMERRETURNTYPETEXT
description: Customerreturntypetext
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - text-view
  - customer
  - text
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNTYPETEXT

**Customerreturntypetext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CustomerReturnType` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `CustomerReturnTypeName` |  | |  | `cast( Text.SalesDocumentTypeName as sd_customer_return_type_name preserving type )` |
| `_CustomerReturnType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerReturnType` | `I_CustomerReturnType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Consumption.ranked: true
@EndUserText.label: 'Returns Order Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'CustomerReturnType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_CustomerReturnTypeText
  as select from I_SalesDocumentTypeText as Text
    inner join   I_CustomerReturnType    as CustomerReturnType on Text.SalesDocumentType = CustomerReturnType.CustomerReturnType

  association [0..1] to I_CustomerReturnType as _CustomerReturnType on $projection.CustomerReturnType = _CustomerReturnType.CustomerReturnType

{
      @ObjectModel.foreignKey.association: '_CustomerReturnType'
      @ObjectModel.text.element: ['CustomerReturnTypeName']
  key CustomerReturnType.CustomerReturnType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Text.Language,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.9,
        ranking: #LOW }
      @Semantics.text: true
      cast( Text.SalesDocumentTypeName as sd_customer_return_type_name preserving type ) as CustomerReturnTypeName,

      _CustomerReturnType,
      Text._Language
}
```
