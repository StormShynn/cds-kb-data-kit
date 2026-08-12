---
name: I_GTEEMBLLDELMNTITMCUBE
description: "Grantee Mgmt Billed Element Item - Cube"
app_component: PSM-GM-GTE-GM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBLLDELMNTITMCUBE')/$value
semantic_en: "Grantee Mgmt Billed Element Item - Cube"
semantic_vi: "Grantee Mgmt Billed Element Item - Cube — CDS view giao diện dựa trên P_ACDOCA."
keywords:
  - "grantee"
  - "mgmt"
  - "billed"
  - "element"
  - "item"
  - "cube"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "line"
tags:
  - PSM
  - component:PSM-GM-GTE-GM
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-GM
  - bo:journalentry
---
# I_GTEEMBLLDELMNTITMCUBE

**Grantee Mgmt Billed Element Item - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-GM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBLLDELMNTITMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | | `_ACDOCA` | `rldnr` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | | `_ACDOCA` | `rbukrs` | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | | `_ACDOCA` | `gjahr` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | | `_ACDOCA` | `belnr` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | | `_ACDOCA` | `docln` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GrantID` |  | | `_ACDOCA` | `rgrant_nbr` | `CHAR(20)` | Grant |
| `ClearingAccountingDocument` |  | | `_ACDOCA` | `augbl` | `CHAR(10)` | Clearing Journal Entry |
| `FinancialAccountType` |  | | `_ACDOCA` | `koart` | `CHAR(1)` | Account Type |
| `ClearingDate` |  | | `_ACDOCA` | `augdt` | `DATS(8)` | Clearing Date |
| `NetDueDate` |  | | `_ACDOCA` | `netdt` | `DATS(8)` | Net Due Date |
| `Customer` |  | | `_ACDOCA` | `kunnr` | `CHAR(10)` | Customer Number |
| `SponsoredProgram` |  | | `_ACDOCA` | `rsponsored_prog` | `CHAR(20)` | Sponsored Program |
| `DocumentCurrency` |  | | `_ACDOCA` | `rwcur` | `CUKY(5)` | Transaction Currency |
| `OnTimePaidAmtInDocCrcy` |  | |  | `case when ( _ACDOCA.augdt is not initial ) and ( _ACDOCA.augdt <= _ACDOCA.netdt ) then cast(_ACDOCA.wsl as gmbe_ontimepaidrevnindoccrcy ) else cast ( 0 as gmbe_ontimepaidrevnindoccrcy ) end` | `CURR(23)` | On Time Paid Revenue Amount |
| `LatePaidAmtInDocCrcy` |  | |  | `case when ( _ACDOCA.augdt is not initial ) and ( _ACDOCA.augdt > _ACDOCA.netdt ) then cast(_ACDOCA.wsl as gmbe_latepaidrevnindoccrcy ) else cast ( 0 as gmbe_latepaidrevnindoccrcy ) end` | `CURR(23)` | Late Paid Revenue |
| `BilledNotDueAmtInDocCrcy` |  | |  | `case when (_ACDOCA.augdt is initial ) and (_ACDOCA.netdt >= $session.system_date) then cast(_ACDOCA.wsl as gmbe_billednotduerevnindoccrcy ) else cast ( 0 as gmbe_billednotduerevnindoccrcy ) end` | `CURR(23)` | Billed and Not Due Revenue |
| `BilledOverdueAmtInDocCrcy` |  | |  | `case when ( _ACDOCA.augdt is initial ) and (_ACDOCA.netdt < $session.system_date) then cast(_ACDOCA.wsl as gmbe_billedovrdrevnindoccrcy ) else cast ( 0 as gmbe_billedovrdrevnindoccrcy ) end` | `CURR(23)` | Billed and Overdue Revenue |
| `GlobalCurrency` |  | | `_ACDOCA` | `rkcur` | `CUKY(5)` | Global Currency |
| `OnTimePaidAmtInGCrcy` |  | |  | `case when ( _ACDOCA.augdt is not initial ) and ( _ACDOCA.augdt <= _ACDOCA.netdt ) then cast(_ACDOCA.ksl as gmbe_ontimepaidrevningcrcy ) else cast ( 0 as gmbe_ontimepaidrevningcrcy ) end` | `CURR(23)` | On Time Paid Revenue in Global Currency |
| `LatePaidAmtInGCrcy` |  | |  | `case when ( _ACDOCA.augdt is not initial ) and ( _ACDOCA.augdt > _ACDOCA.netdt ) then cast(_ACDOCA.ksl as gmbe_latepaidrevningcrcy ) else cast ( 0 as gmbe_latepaidrevningcrcy ) end` | `CURR(23)` | Late Paid Revenue Amount in Global Crrency |
| `BilledNotDueAmtInGCrcy` |  | |  | `case when (_ACDOCA.augdt is initial ) and (_ACDOCA.netdt >= $session.system_date) then cast(_ACDOCA.ksl as gmbe_billednotduerevningcrcy ) else cast ( 0 as gmbe_billednotduerevningcrcy ) end` | `CURR(23)` | Billed and Not Due Revenue Amount in Global Currency |
| `BilledOverdueAmtInGCrcy` |  | |  | `case when ( _ACDOCA.augdt is initial ) and (_ACDOCA.netdt < $session.system_date) then cast(_ACDOCA.ksl as gmbe_billedovrdrevningcrcy ) else cast ( 0 as gmbe_billedovrdrevningcrcy ) end` | `CURR(23)` | Billed and Overdue Amount in Global Currency |
| `NotPaidRevenueAmtInGCrcy` |  | |  | `case when (_ACDOCA.augdt is initial ) then cast(_ACDOCA.ksl as gmbe_notpaidrevnamtingcrcy ) else cast ( 0 as gmbe_notpaidrevnamtingcrcy ) end` | `CURR(23)` | Billed Not Paid Revenue Amount in Global Currency |
| `GranteeMgmtSponsor` |  | | `_Grant` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `_Grant` | | ✓ | | | | |
| `_SponsoredProgramCore` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Grant` | `I_Grant` | [1..1] |
| `_SponsoredProgramCore` | `I_SponsoredProgramCore` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBLLDELMNTITMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBLLDELMNTITMCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMBLDELMITMCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Grantee Mgmt Billed Element Item - Cube'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
    }
@ClientHandling.algorithm: #SESSION_VARIABLE
define view I_GteeMBlldElmntItmCube
  as select from P_ACDOCA as _ACDOCA
  association [1..1] to I_Grant                as _Grant                on $projection.GrantID = _Grant.GrantID
  association [0..1] to I_SponsoredProgramCore as _SponsoredProgramCore on $projection.SponsoredProgram = _SponsoredProgramCore.SponsoredProgram
{

  key    _ACDOCA.rldnr           as Ledger,
  key    _ACDOCA.rbukrs          as CompanyCode,
  key    _ACDOCA.gjahr           as FiscalYear,
  key    _ACDOCA.belnr           as AccountingDocument,
  key    _ACDOCA.docln           as LedgerGLLineItem,
         @ObjectModel.foreignKey.association: '_Grant'
         _ACDOCA.rgrant_nbr      as GrantID,
         _ACDOCA.augbl           as ClearingAccountingDocument,
         _ACDOCA.koart           as FinancialAccountType,
         _ACDOCA.augdt           as ClearingDate,
         _ACDOCA.netdt           as NetDueDate,
         _ACDOCA.kunnr           as Customer,
         @Analytics.internalName: #LOCAL
         @ObjectModel.foreignKey.association: '_SponsoredProgramCore'
         _ACDOCA.rsponsored_prog as SponsoredProgram,
         // Amounts
         @Semantics.currencyCode: true
         _ACDOCA.rwcur           as DocumentCurrency,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
         case when ( _ACDOCA.augdt is not initial ) and ( _ACDOCA.augdt <= _ACDOCA.netdt )
         then cast(_ACDOCA.wsl as gmbe_ontimepaidrevnindoccrcy )
         else cast ( 0 as gmbe_ontimepaidrevnindoccrcy )
         end                     as OnTimePaidAmtInDocCrcy,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
         case when ( _ACDOCA.augdt is not initial ) and ( _ACDOCA.augdt > _ACDOCA.netdt )
         then cast(_ACDOCA.wsl as gmbe_latepaidrevnindoccrcy )
         else cast ( 0 as gmbe_latepaidrevnindoccrcy )
         end                     as LatePaidAmtInDocCrcy,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
         case when (_ACDOCA.augdt  is initial ) and  (_ACDOCA.netdt >= $session.system_date)
          then cast(_ACDOCA.wsl as gmbe_billednotduerevnindoccrcy )
          else cast ( 0 as gmbe_billednotduerevnindoccrcy )
          end                    as BilledNotDueAmtInDocCrcy,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
         case when ( _ACDOCA.augdt is initial ) and  (_ACDOCA.netdt < $session.system_date)
         then cast(_ACDOCA.wsl as gmbe_billedovrdrevnindoccrcy )
         else cast ( 0 as gmbe_billedovrdrevnindoccrcy )
         end                     as BilledOverdueAmtInDocCrcy,
         --------------------------------------------------------------------
         @Semantics.currencyCode: true
         _ACDOCA.rkcur           as GlobalCurrency,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         case when ( _ACDOCA.augdt is not initial ) and ( _ACDOCA.augdt <= _ACDOCA.netdt )
         then cast(_ACDOCA.ksl as gmbe_ontimepaidrevningcrcy )
         else cast ( 0 as gmbe_ontimepaidrevningcrcy )
         end                     as OnTimePaidAmtInGCrcy,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         case when ( _ACDOCA.augdt is not initial ) and ( _ACDOCA.augdt > _ACDOCA.netdt )
         then cast(_ACDOCA.ksl as gmbe_latepaidrevningcrcy )
         else cast ( 0 as gmbe_latepaidrevningcrcy )
         end                     as LatePaidAmtInGCrcy,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         case when (_ACDOCA.augdt  is initial ) and  (_ACDOCA.netdt >= $session.system_date)
          then cast(_ACDOCA.ksl as gmbe_billednotduerevningcrcy )
          else cast ( 0 as gmbe_billednotduerevningcrcy )
          end                    as BilledNotDueAmtInGCrcy,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         case when ( _ACDOCA.augdt is initial ) and  (_ACDOCA.netdt < $session.system_date)
         then cast(_ACDOCA.ksl as gmbe_billedovrdrevningcrcy )
         else cast ( 0 as gmbe_billedovrdrevningcrcy )
         end                     as BilledOverdueAmtInGCrcy,
         @DefaultAggregation: #SUM
         @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
         case when (_ACDOCA.augdt  is initial )
         then cast(_ACDOCA.ksl as gmbe_notpaidrevnamtingcrcy )
          else cast ( 0 as gmbe_notpaidrevnamtingcrcy )
          end                    as NotPaidRevenueAmtInGCrcy,
         @ObjectModel.foreignKey.association: '_Sponsor'
         _Grant.GranteeMgmtSponsor,
         _Grant._Sponsor,
         _SponsoredProgramCore,
         _Grant

}

where
      awtyp = 'VBRK'
  and koart = 'D'
  and rldnr = '0L'
```
