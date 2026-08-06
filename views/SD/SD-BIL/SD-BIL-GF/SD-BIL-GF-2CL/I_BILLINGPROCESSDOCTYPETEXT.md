---
name: I_BILLINGPROCESSDOCTYPETEXT
description: Billingprocessdoctypetext
app_component: SD-BIL-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-GF
  - interface-view
  - text-view
  - billing
  - text
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPROCESSDOCTYPETEXT

**Billingprocessdoctypetext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillingProcessDocumentType` | `cast( fkart as billingprocessdocumenttype preserving type )` |
| key `Language` | `spras` |
| `BillingProcessDocumentTypeName` | `cast( vtext as billingprocessdocumenttypename preserving type )` |
| `_Language` | *Association* |
| `_BillingProcessDocumentType` | *Association* |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Billing Process Document Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'BillingProcessDocumentType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, serviceQuality: #A, sizeCategory: #S }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_BillingProcessDocTypeText
  as select from tvfkt

  association to parent I_BillingProcessDocumentType as _BillingProcessDocumentType on $projection.BillingProcessDocumentType = _BillingProcessDocumentType.BillingProcessDocumentType
  association to exact one I_Language                as _Language                   on $projection.Language = _Language.Language

{

      @ObjectModel.foreignKey.association: '_BillingProcessDocumentType'
      @ObjectModel.text.element: ['BillingProcessDocumentTypeName']
  key cast( fkart as billingprocessdocumenttype preserving type )     as BillingProcessDocumentType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                                           as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( vtext as billingprocessdocumenttypename preserving type ) as BillingProcessDocumentTypeName,

      _Language,
      _BillingProcessDocumentType
}
```
