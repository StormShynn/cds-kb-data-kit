---
name: I_INVOICEINBOUNDENTRYTYPE
description: "Invoiceinboundentrytype"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_INVOICEINBOUNDENTRYTYPE

**Invoiceinboundentrytype**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoiceInboundEntryType` | ✓ | |  | `cast( dd07l.domvalue_l as invoice_inbound_entry_type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InvoiceInboundEntryTypeTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMINVINBENTTYP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Invoice Inbound Entry Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'InvoiceInboundEntryType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'SupplierInvoice'

define view I_InvoiceInboundEntryType

  as select from dd07l
  association [0..*] to I_InvoiceInboundEntryTypeTxt as _Text on _Text.InvoiceInboundEntryType = $projection.InvoiceInboundEntryType
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as invoice_inbound_entry_type ) as InvoiceInboundEntryType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                       as DomainValue,
      _Text 
}
where
      dd07l.domname  = 'INVOICE_INBOUND_ENTRY_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
