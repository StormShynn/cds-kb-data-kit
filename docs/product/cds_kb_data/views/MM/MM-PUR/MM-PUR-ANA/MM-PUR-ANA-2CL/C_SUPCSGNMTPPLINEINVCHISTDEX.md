---
name: C_SUPCSGNMTPPLINEINVCHISTDEX
description: "Supcsgnmtpplineinvchistdex"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_SUPCSGNMTPPLINEINVCHISTDEX

**Supcsgnmtpplineinvchistdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
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
| `CompanyCode` |  | | `_SupCsgnmtPplineWthdrwlAPI01` | `CompanyCode` |  |  |
| `Plant` |  | | `_SupCsgnmtPplineWthdrwlAPI01` | `Plant` |  |  |
| `_SuplrCsgnmtPplineWthdrwlDEX` | | ✓ | | | | |
| `_SupplierInvoiceDEX` | | ✓ | | | | |
| `_SupplierInvoiceItemDEX` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrCsgnmtPplineWthdrwlDEX` | `C_SuplrCsgnmtPplineWthdrwlDEX` | [1..1] |
| `_SupplierInvoiceDEX` | `C_SupplierInvoiceDEX` | [1..1] |
| `_SupplierInvoiceItemDEX` | `C_SupplierInvoiceItemDEX` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName                : 'CSUPCSGINVHDEX'
@AbapCatalog.compiler.compareFilter     : true
@AccessControl:{ authorizationCheck     : #MANDATORY,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ],
                modelingPattern         : #ANALYTICAL_FACT
              }

@VDM.viewType                           : #CONSUMPTION

@Metadata.ignorePropagatedAnnotations   : true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'rkwa_history', role: #MAIN,
                        viewElement     : ['MaterialDocument','MaterialDocumentYear','MaterialDocumentItem','SupplierInvoice','FiscalYear','SupplierInvoiceItem'],
                        tableElement    : ['mblnr','mjahr','mblpo','belnr','gjahr','buzei']
                      }
                    ]
        }
    }
}
@ObjectModel.sapObjectNodeType.name: 'SuplrCsgnmtPplineSettlmtHist'
@EndUserText.label: 'Consignment and Pipeline History of Supplier Invoice'
@ObjectModel.compositionRoot: true
define view C_SupCsgnmtPplineInvcHistDEX 
as select from I_SupCsgnmtPplineInvcHistAPI01

  association [1..1] to C_SuplrCsgnmtPplineWthdrwlDEX as _SuplrCsgnmtPplineWthdrwlDEX on  $projection.MaterialDocument     = _SuplrCsgnmtPplineWthdrwlDEX.MaterialDocument
                                                                                      and $projection.MaterialDocumentYear = _SuplrCsgnmtPplineWthdrwlDEX.MaterialDocumentYear
                                                                                      and $projection.MaterialDocumentItem = _SuplrCsgnmtPplineWthdrwlDEX.MaterialDocumentItem

  association [1..1] to C_SupplierInvoiceDEX          as _SupplierInvoiceDEX          on  $projection.SupplierInvoice = _SupplierInvoiceDEX.SupplierInvoice
                                                                                      and $projection.FiscalYear      = _SupplierInvoiceDEX.FiscalYear

  association [1..1] to C_SupplierInvoiceItemDEX      as _SupplierInvoiceItemDEX      on  $projection.SupplierInvoice     = _SupplierInvoiceItemDEX.SupplierInvoice
                                                                                      and $projection.FiscalYear          = _SupplierInvoiceItemDEX.FiscalYear
                                                                                      and $projection.SupplierInvoiceItem = _SupplierInvoiceItemDEX.SupplierInvoiceItem

  association [1..1] to I_CompanyCode                 as _CompanyCode                 on $projection.companycode = _CompanyCode.CompanyCode

  association [1..1] to I_Plant                       as _Plant                       on $projection.plant = _Plant.Plant
{
  key MaterialDocument,

      @Semantics.calendar.year: true
  key MaterialDocumentYear,
  
  key MaterialDocumentItem,
  key SupplierInvoice,

      @Semantics.fiscal.year: true
  key FiscalYear,

  key SupplierInvoiceItem,
  
  //Added for DCL
  @ObjectModel.foreignKey.association: '_CompanyCode'
  _SupCsgnmtPplineWthdrwlAPI01.CompanyCode,

  @ObjectModel.foreignKey.association: '_Plant'
  _SupCsgnmtPplineWthdrwlAPI01.Plant,

  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _SuplrCsgnmtPplineWthdrwlDEX,
    
  _SupplierInvoiceDEX,
  _SupplierInvoiceItemDEX,
  _CompanyCode,
  _Plant
}
```
