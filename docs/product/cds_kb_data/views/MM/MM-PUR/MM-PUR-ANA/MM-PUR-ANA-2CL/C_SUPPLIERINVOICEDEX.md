---
name: C_SUPPLIERINVOICEDEX
description: "Supplier InvoiceDEX"
app_component: MM-PUR-ANA-2CL
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
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - supplier
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# C_SUPPLIERINVOICEDEX

**Supplier InvoiceDEX**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
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
| `SupplierInvoice` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `SupplierInvoiceIDByInvcgParty` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `IsInvoice` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `InvoiceGrossAmount` |  | |  |  |  |  |
| `SuplrInvcAutomReducedAmount` |  | |  |  |  |  |
| `UnplannedDeliveryCost` |  | |  |  |  |  |
| `DocumentHeaderText` |  | |  |  |  |  |
| `SupplierInvoiceOrigin` |  | |  |  |  |  |
| `SuplrInvcManuallyReducedAmount` |  | |  |  |  |  |
| `UnplannedDeliveryCostTaxCode` |  | |  |  |  |  |
| `SupplierInvoiceStatus` |  | |  |  |  |  |
| `ReverseDocument` |  | |  |  |  |  |
| `ReverseDocumentFiscalYear` |  | |  |  |  |  |
| `_SupplierInvoiceItemDEX` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_SupplierInvoiceStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HeaderExtension` | `E_SupplierInvoice` | [0..1] |
| `_SupplierInvoiceItemDEX` | `C_SupplierInvoiceItemDEX` | [1..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_InvoicingParty` | `I_Supplier` | [0..1] |
| `_DocumentCurrency` | `I_Currency` | [0..1] |
| `_SupplierInvoiceStatus` | `I_SupplierInvoiceStatusAPI01` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName                : 'CMMSUPINVC'
@AbapCatalog.compiler.compareFilter     : true
@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@EndUserText.label                      : 'Data Extraction for Supplier Invoice'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ]
              }

@VDM.viewType                           : #CONSUMPTION
//@ObjectModel.representativeKey          : [ 'SupplierInvoice' ]
@Metadata.ignorePropagatedAnnotations   : true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'rbkp', role: #MAIN,
                        viewElement     : ['SupplierInvoice', 'FiscalYear'],
                        tableElement    : ['belnr', 'gjahr']
                      }
                    ]
        }
    }
}
@ObjectModel.sapObjectNodeType.name: 'SupplierInvoice'
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_SupplierInvoiceDEX
  as select from I_SupplierInvoiceAPI01
  association [0..1] to E_SupplierInvoice            as _HeaderExtension           on  $projection.SupplierInvoice = _HeaderExtension.SupplierInvoice
                                                                                   and $projection.FiscalYear      = _HeaderExtension.FiscalYear
                                                                        /*and $projection.SupplierInvoiceUUID = _HeaderExtension.SupplierInvoiceUUID*/

  association [1..*] to C_SupplierInvoiceItemDEX     as _SupplierInvoiceItemDEX    on  $projection.SupplierInvoice = _SupplierInvoiceItemDEX.SupplierInvoice
                                                                                   and $projection.FiscalYear      = _SupplierInvoiceItemDEX.FiscalYear

  association [0..1] to I_CompanyCode                as _CompanyCode               on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_Supplier                   as _InvoicingParty            on $projection.InvoicingParty = _InvoicingParty.Supplier

  association [0..1] to I_Currency                   as _DocumentCurrency          on $projection.DocumentCurrency = _DocumentCurrency.Currency

  association [0..1] to I_SupplierInvoiceStatusAPI01 as _SupplierInvoiceStatus     on $projection.SupplierInvoiceStatus = _SupplierInvoiceStatus.SupplierInvoiceStatus
{
  key SupplierInvoice                as SupplierInvoice,

      @Semantics.fiscal.year: true
  key FiscalYear                     as FiscalYear,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode                    as CompanyCode,

      @Semantics.businessDate.at: true
      DocumentDate                   as DocumentDate,

      @Semantics.businessDate.at: true
      PostingDate                    as PostingDate,

      SupplierInvoiceIDByInvcgParty  as SupplierInvoiceIDByInvcgParty,

      @ObjectModel.foreignKey.association: '_InvoicingParty'
      InvoicingParty                 as InvoicingParty,

      @Semantics.booleanIndicator:true
      IsInvoice                      as IsInvoice,

      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      @Semantics.currencyCode: true
      DocumentCurrency               as DocumentCurrency,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      InvoiceGrossAmount             as InvoiceGrossAmount,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      SuplrInvcAutomReducedAmount    as SuplrInvcAutomReducedAmount,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      UnplannedDeliveryCost          as UnplannedDeliveryCost,

      @Semantics.text: true
      DocumentHeaderText             as DocumentHeaderText,


      --PurchaseOrderPriceUnit,

      SupplierInvoiceOrigin          as SupplierInvoiceOrigin,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      SuplrInvcManuallyReducedAmount as SuplrInvcManuallyReducedAmount,

      UnplannedDeliveryCostTaxCode   as UnplannedDeliveryCostTaxCode,

      @ObjectModel.foreignKey.association: '_SupplierInvoiceStatus'
      SupplierInvoiceStatus          as SupplierInvoiceStatus,

      ReverseDocument                as ReverseDocument,
      
      @Semantics.fiscal.year: true
      ReverseDocumentFiscalYear      as ReverseDocumentFiscalYear,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _SupplierInvoiceItemDEX,

      _CompanyCode,
      _InvoicingParty,
      _DocumentCurrency,
      _SupplierInvoiceStatus
}
```
