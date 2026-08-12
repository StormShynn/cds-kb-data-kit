---
name: I_SUPPLIERQUOTATIONTYPE
description: "Supplierquotationtype"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - supplier
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERQUOTATIONTYPE

**Supplierquotationtype**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrQtnType` | ✓ | |  | `PurchasingDocumentType` |  |  |
| `_SupplierQuotationTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierQuotationTypeText` | `I_PurchasingDocumentTypeText` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'SuplrQtnType'
@ObjectModel.semanticKey: 'SuplrQtnType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@AbapCatalog.sqlViewName: 'ISUPLRQTNTYPE'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Supplier Quotation Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
                                     
define view I_SupplierQuotationType
  as select from I_PurchasingDocumentType as SuplrQtnType

  association [0..*] to I_PurchasingDocumentTypeText as _SupplierQuotationTypeText on  _SupplierQuotationTypeText.PurchasingDocumentCategory = 'O'
                                                                                   and _SupplierQuotationTypeText.PurchasingDocumentType     = $projection.SuplrQtnType

{
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      @ObjectModel.text.association: '_SupplierQuotationTypeText'
  key SuplrQtnType.PurchasingDocumentType as SuplrQtnType,

      _SupplierQuotationTypeText

}
where
  SuplrQtnType.PurchasingDocumentCategory = 'O'
```
