---
name: I_BILLGDOCREQUESTTYPETEXT
description: "Billgdocrequesttypetext"
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - text-view
  - text
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLGDOCREQUESTTYPETEXT

**Billgdocrequesttypetext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentRequestType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `BillingDocumentRequestTypeName` |  | |  | `cast ( Text.BillingProcessDocumentTypeName as billingdocumentrequesttypename preserving type )` |  |  |
| `_BillingDocumentRequestType` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Consumption.ranked: true
@EndUserText.label: 'Billing Document Request Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'BillingDocumentRequestType'
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

define view entity I_BillgDocRequestTypeText
  as select from I_BillingProcessDocTypeText  as Text
    inner join   I_BillingDocumentRequestType as BillingDocumentRequestType on Text.BillingProcessDocumentType = BillingDocumentRequestType.BillingDocumentRequestType

  association to parent I_BillingDocumentRequestType as _BillingDocumentRequestType on $projection.BillingDocumentRequestType = _BillingDocumentRequestType.BillingDocumentRequestType

{
      @ObjectModel.foreignKey.association: '_BillingDocumentRequestType'
      @ObjectModel.text.element: ['BillingDocumentRequestTypeName']
  key BillingDocumentRequestType.BillingDocumentRequestType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Text.Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast ( Text.BillingProcessDocumentTypeName as billingdocumentrequesttypename preserving type ) as BillingDocumentRequestTypeName,

      Text._Language,
      _BillingDocumentRequestType
}
```
