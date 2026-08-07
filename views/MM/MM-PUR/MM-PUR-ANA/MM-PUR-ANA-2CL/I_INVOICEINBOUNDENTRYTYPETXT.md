---
name: I_INVOICEINBOUNDENTRYTYPETXT
description: "Invoiceinboundentrytypetxt"
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
# I_INVOICEINBOUNDENTRYTYPETXT

**Invoiceinboundentrytypetxt**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `InvoiceInboundEntryType` | ✓ | |  | `cast( dd07t.domvalue_l as invoice_inbound_entry_type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `SourceTypeDesc` |  | |  | `cast( dd07t.ddtext as abap.char(60) )` |  |  |
| `_EntryType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EntryType` | `I_InvoiceInboundEntryType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMINVINBENTTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Invoice Inbound Entry Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'InvoiceInboundEntryType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ] 
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_InvoiceInboundEntryTypeTxt

  as select from dd07t

  association [0..1] to I_InvoiceInboundEntryType as _EntryType on _EntryType.InvoiceInboundEntryType = $projection.InvoiceInboundEntryType
  association [0..1] to I_Language                as _Language  on _Language.Language = $projection.Language
{
 
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )      as Language,
      @ObjectModel.foreignKey.association: '_EntryType'
      @ObjectModel.text.element: ['SourceTypeDesc']
  key cast( dd07t.domvalue_l as invoice_inbound_entry_type ) as InvoiceInboundEntryType,
      @Consumption.hidden: true
      dd07t.domvalue_l                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as abap.char(60) )                  as SourceTypeDesc,
      _EntryType,
      _Language

}
where
      dd07t.domname  = 'INVOICE_INBOUND_ENTRY_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
