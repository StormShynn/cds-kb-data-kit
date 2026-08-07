---
name: I_PRJBLGELMENTRJRNLENTRLINK
description: Prjblgelmentrjrnlentrlink
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PRJBLGELMENTRJRNLENTRLINK

**Prjblgelmentrjrnlentrlink**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProjBillgElmntEntrItmUUID` | ✓ | |  | `projbillgelmntentritmuuid` |
| `Ledger` |  | |  | `ledger` |
| `CompanyCode` |  | |  | `companycode` |
| `FiscalYear` |  | |  | `fiscalyear` |
| `AccountingDocument` |  | |  | `accountingdocument` |
| `LedgerGLLineItem` |  | |  | `ledgergllineitem` |
| `ReferenceDocument` |  | |  | `referencedocument` |
| `ReversalReferenceDocument` |  | |  | `reversalreferencedocument` |
| `CreatedByUser` |  | |  | `createdbyuser` |
| `CreationDateTime` |  | |  | `creationdatetime` |
| `LastChangedByUser` |  | |  | `lastchangedbyuser` |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` |
| `_ProjectBillingElementEntry` | | ✓ | | |
| `_GLAccountLineItemRawData` | | ✓ | | |
| `_Ledger` | | ✓ | | |
| `_LedgerText` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_AccountingDocument` | | ✓ | | |
| `_FiscalYear` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectBillingElementEntry` | `I_ProjectBillingElementEntry` | [1..1] |
| `_GLAccountLineItemRawData` | `I_GLAccountLineItemRawData` | [1..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_LedgerText` | `I_LedgerText` | [1..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_AccountingDocument` | `I_AccountingDocument` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Journal Entry for Billing Element'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
// @AbapCatalog.compiler.compareFilter: true
// @AbapCatalog.sqlViewName: 'IPBEEJELINK'
@AccessControl.authorizationCheck: #CHECK 

@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true

@ObjectModel: {
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE,#UI_PROVIDER_PROJECTION_SOURCE ],
    usageType:{
       sizeCategory: #L,
       dataClass:  #TRANSACTIONAL,
       serviceQuality: #B
    },
    representativeKey: 'ProjBillgElmntEntrItmUUID'
}
// @AbapCatalog.preserveKey:true
// @ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjBillgElmntEntrJrnlEntrLink'

define view entity I_PrjBlgElmEntrJrnlEntrLink
  as select from pbeelnkjrnlentr                       as PrjBlgElmEntrJrnlEntrLink
    association[1..1]  to I_ProjectBillingElementEntry as _ProjectBillingElementEntry on PrjBlgElmEntrJrnlEntrLink.projbillgelmntentritmuuid = _ProjectBillingElementEntry.ProjBillgElmntEntrItmUUID
    association[1..1]  to I_GLAccountLineItemRawData   as _GLAccountLineItemRawData   on $projection.Ledger                                  = _GLAccountLineItemRawData.SourceLedger
    
                                                                                      and $projection.AccountingDocument                     = _GLAccountLineItemRawData.AccountingDocument
                                                                                      and $projection.CompanyCode                            = _GLAccountLineItemRawData.CompanyCode
                                                                                      and $projection.FiscalYear                             = _GLAccountLineItemRawData.FiscalYear
                                                                                      and $projection.LedgerGLLineItem                       = _GLAccountLineItemRawData.LedgerGLLineItem
                                                                                      
    association [1..1] to I_Ledger                     as _Ledger                     on  $projection.Ledger                                 = _Ledger.Ledger
    
    association [1..*] to I_LedgerText                 as _LedgerText                 on  $projection.Ledger                                 = _LedgerText.Ledger 
                                                                                      
    association [1..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode                            = _CompanyCode.CompanyCode
    
    association [1..1] to I_AccountingDocument         as _AccountingDocument         on  $projection.CompanyCode                            = _AccountingDocument.CompanyCode
                                                                                      and $projection.FiscalYear                             = _AccountingDocument.FiscalYear
                                                                                      and $projection.AccountingDocument                     = _AccountingDocument.AccountingDocument
                                                                                      
    association [0..1] to I_FiscalYearForCompanyCode   as _FiscalYear                 on  $projection.FiscalYear                             = _FiscalYear.FiscalYear
                                                                                      and $projection.CompanyCode                            = _FiscalYear.CompanyCode
    
{
  key PrjBlgElmEntrJrnlEntrLink.projbillgelmntentritmuuid  as ProjBillgElmntEntrItmUUID,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]
      @ObjectModel.foreignKey.association: '_Ledger'
      PrjBlgElmEntrJrnlEntrLink.ledger                     as Ledger,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      PrjBlgElmEntrJrnlEntrLink.companycode                as CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
      PrjBlgElmEntrJrnlEntrLink.fiscalyear                 as FiscalYear,
      @ObjectModel.foreignKey.association: '_AccountingDocument'
      PrjBlgElmEntrJrnlEntrLink.accountingdocument         as AccountingDocument,
      PrjBlgElmEntrJrnlEntrLink.ledgergllineitem           as LedgerGLLineItem,
      PrjBlgElmEntrJrnlEntrLink.referencedocument          as ReferenceDocument,
      PrjBlgElmEntrJrnlEntrLink.reversalreferencedocument  as ReversalReferenceDocument,
      @Semantics.user.createdBy: true
      PrjBlgElmEntrJrnlEntrLink.createdbyuser              as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      PrjBlgElmEntrJrnlEntrLink.creationdatetime           as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      PrjBlgElmEntrJrnlEntrLink.lastchangedbyuser          as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      PrjBlgElmEntrJrnlEntrLink.lastchangedatetime         as LastChangeDateTime,    
      _GLAccountLineItemRawData,
      _ProjectBillingElementEntry,
      _Ledger,
      @Consumption.hidden: true
      _LedgerText,
      _CompanyCode,
      _AccountingDocument,
      _FiscalYear

}
```
