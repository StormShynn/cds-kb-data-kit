---
name: I_SUPCSGNMTPPLINEINVCHISTAPI01
description: "Supcsgnmtpplineinvchistapi 01"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPCSGNMTPPLINEINVCHISTAPI01

**Supcsgnmtpplineinvchistapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocument` | ✓ | |  |  |  |  |
| `MaterialDocumentYear` | ✓ | |  |  |  |  |
| `MaterialDocumentItem` | ✓ | |  |  |  |  |
| `SupplierInvoice` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `SupplierInvoiceItem` | ✓ | |  |  |  |  |
| `_SupCsgnmtPplineWthdrwlAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupCsgnmtPplineWthdrwlAPI01` | `I_SupCsgnmtPplineWthdrwlAPI01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPCSGINVHIST01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Consignment and Pipeline History of Supplier Invoice'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.semanticKey:['MaterialDocument', 'MaterialDocumentYear', 'MaterialDocumentItem' ]
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@VDM.viewType : #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'SupplierInvoiceItemConsignment'
define view I_SupCsgnmtPplineInvcHistAPI01
  as select from I_SupCsgnmtPplineInvcHist
  
  association [1..1] to I_SupCsgnmtPplineWthdrwlAPI01 as _SupCsgnmtPplineWthdrwlAPI01 on  $projection.MaterialDocument      = _SupCsgnmtPplineWthdrwlAPI01.MaterialDocument
                                                                                      and $projection.MaterialDocumentYear  = _SupCsgnmtPplineWthdrwlAPI01.MaterialDocumentYear
                                                                                      and $projection.MaterialDocumentItem  = _SupCsgnmtPplineWthdrwlAPI01.MaterialDocumentItem
{
  key MaterialDocument,
  key MaterialDocumentYear,
  key MaterialDocumentItem,
  key SupplierInvoice,
  key FiscalYear,
  key SupplierInvoiceItem,
  
  /* Associations */
  _SupCsgnmtPplineWthdrwlAPI01
}
where
      // Filter: Blocked entries due to EOP of Supplier
      ( _SupCsgnmtPplineWthdrwlAPI01.MaterialDocument is not null and _SupCsgnmtPplineWthdrwlAPI01.MaterialDocument <> '' );
```
