---
name: I_BILLINGDOCUMENTTYPETEXT_2
description: Billing DocumentUMENTTYPETEXT 2
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - interface-view
  - billing-document
  - billing
  - document
  - text
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTTYPETEXT_2

**Billing DocumentUMENTTYPETEXT 2**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillingDocumentType` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `BillingDocumentTypeName` |  | |  | `cast ( Text.BillingProcessDocumentTypeName as billingdocumenttypename preserving type )` |
| `_BillingDocumentType` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Consumption.ranked: true
@EndUserText.label: 'Billing Document Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'BillingDocumentType'
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

define view entity I_BillingDocumentTypeText_2
  as select from I_BillingProcessDocTypeText as Text
    inner join   I_BillingDocumentType_2     as BillingDocumentType on Text.BillingProcessDocumentType = BillingDocumentType.BillingDocumentType

  association to parent I_BillingDocumentType_2 as _BillingDocumentType on $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

{
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      @ObjectModel.text.element: ['BillingDocumentTypeName']
  key BillingDocumentType.BillingDocumentType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Text.Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast ( Text.BillingProcessDocumentTypeName as billingdocumenttypename preserving type ) as BillingDocumentTypeName,

      Text._Language,
      _BillingDocumentType
}
```
