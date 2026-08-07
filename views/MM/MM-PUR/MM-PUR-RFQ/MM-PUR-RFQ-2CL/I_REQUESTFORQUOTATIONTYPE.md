---
name: I_REQUESTFORQUOTATIONTYPE
description: Requestforquotationtype
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_REQUESTFORQUOTATIONTYPE

**Requestforquotationtype**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RFQType` | ✓ | |  | `PurchasingDocumentType` |  |  |
| `_RFQTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RFQTypeText` | `I_PurchasingDocumentTypeText` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'RFQType'
@ObjectModel.semanticKey: 'RFQType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IRFQTYPE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'RFQ Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE 

define view I_RequestForQuotationType
  as select from I_PurchasingDocumentType as RFQType

  association [0..*] to I_PurchasingDocumentTypeText as _RFQTypeText on  _RFQTypeText.PurchasingDocumentCategory = 'R'
                                                                     and _RFQTypeText.PurchasingDocumentType     = $projection.RFQType

{
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      @ObjectModel.text.association: '_RFQTypeText'
  key RFQType.PurchasingDocumentType as RFQType,

      _RFQTypeText

}
where
  RFQType.PurchasingDocumentCategory = 'R'
```
