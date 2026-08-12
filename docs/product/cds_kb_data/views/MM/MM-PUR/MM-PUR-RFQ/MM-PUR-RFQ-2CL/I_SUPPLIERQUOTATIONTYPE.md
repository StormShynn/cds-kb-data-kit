---
name: I_SUPPLIERQUOTATIONTYPE
description: "Supplierquotationtype"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
