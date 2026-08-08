---
name: I_REDOCUMENTITEM
description: "Redocumentitem"
app_component: RE-FX-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-RA
  - interface-view
  - document
  - item-level
  - component:RE-FX-RA-2CL
  - lob:Other
---
# I_REDOCUMENTITEM

**Redocumentitem**

| Property | Value |
|---|---|
| App Component | `RE-FX-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateDocumentUUID` | ✓ | |  | `docguid` |  |  |
| `RealEstateDocumentItem` | ✓ | |  | `itemno` |  |  |
| `REReferenceDocumentItem` |  | |  | `refitemno` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `ControllingArea` |  | | `_CompanyCode` | `ControllingArea` |  |  |
| `REDocumentItemType` |  | |  | `itemtype` |  |  |
| `SettlementReferenceDate` |  | |  | `refdate` |  |  |
| `REProcessType` |  | |  | `process` |  |  |
| `REProcessUUID` |  | |  | `processguid` |  |  |
| `RealEstateClearingProcess` |  | |  | `clearngprocessid` |  |  |
| `REDocumentReferenceOrigin` |  | |  | `refguidorigin` |  |  |
| `REDocumentReferenceUUID` |  | |  | `refguid` |  |  |
| `REStatusObject` |  | |  | `objnr` |  |  |
| `CalculationPeriodStartDate` |  | |  | `pfrom` |  |  |
| `CalculationPeriodEndDate` |  | |  | `pto` |  |  |
| `DueCalculationBaseDate` |  | |  | `blinedate` |  |  |
| `REOriglDueDate` |  | |  | `origduedate` |  |  |
| `REConditionType` |  | |  | `condtype` |  |  |
| `REFlowType` |  | |  | `flowtype` |  |  |
| `DebitCreditCode` |  | |  | `dcindicator` |  |  |
| `RETaxCalcDate` |  | |  | `taxdate` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `Fund` |  | |  | `cast( fund as bp_geber )` |  |  |
| `FundsCenter` |  | |  | `cast( fundscenter as fm_fictr )` |  |  |
| `CommitmentItem` |  | |  | `cast( commitmentitem as fm_fipex preserving type )` |  |  |
| `FunctionalArea` |  | |  | `cast( functionalarea as fm_farea )` |  |  |
| `REFundsManagementGrantID` |  | |  | `cast( grantnumber as reravdmgrantnumber preserving type)` |  |  |
| `REStatusObjectAsset` |  | |  | `assetobjnr` |  |  |
| `REValnIsCompleteRetirement` |  | |  | `iscompleteretirement` |  |  |
| `_REDocumentHeader` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REDocumentHeader` | `I_REDocumentHeader` | [1..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREDOCITEM'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Real Estate Document Item'
@Analytics.internalName: #LOCAL
@ObjectModel: {
  representativeKey: 'RealEstateDocumentUUID',
  usageType: {
    dataClass: #MIXED,
    serviceQuality: #C,
    sizeCategory: #L
  },
  modelingPattern: #NONE,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

define view entity I_REDocumentItem
  as select from viradocitem
  association [1..1] to I_REDocumentHeader    as _REDocumentHeader    on  $projection.RealEstateDocumentUUID = _REDocumentHeader.RealEstateDocumentUUID
  association [0..1] to I_BusinessArea        as _BusinessArea        on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [1..1] to I_CompanyCode         as _CompanyCode         on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ProfitCenter        as _ProfitCenter        on  $projection.ProfitCenter        = _ProfitCenter.ProfitCenter
                                                                     and $projection.ControllingArea     = _ProfitCenter.ControllingArea
                                                                     and _ProfitCenter.ValidityEndDate   >= $session.system_date
                                                                     and _ProfitCenter.ValidityStartDate <= $session.system_date
{
  key docguid                                                    as RealEstateDocumentUUID,
  key itemno                                                     as RealEstateDocumentItem,
      refitemno                                                  as REReferenceDocumentItem,
      bukrs                                                      as CompanyCode,
      _CompanyCode.ControllingArea                               as ControllingArea,
      itemtype                                                   as REDocumentItemType,
      refdate                                                    as SettlementReferenceDate,
      process                                                    as REProcessType,
      processguid                                                as REProcessUUID,
      //      clearingstatus,
      clearngprocessid                                           as RealEstateClearingProcess, 
      //      payedstatus,
      //      dunningstatus,
      refguidorigin                                              as REDocumentReferenceOrigin,
      refguid                                                    as REDocumentReferenceUUID,
      objnr                                                      as REStatusObject,
      pfrom                                                      as CalculationPeriodStartDate,
      pto                                                        as CalculationPeriodEndDate,
      blinedate                                                  as DueCalculationBaseDate,
      origduedate                                                as REOriglDueDate,
      condtype                                                   as REConditionType,
      //      isadvancepayment,
      flowtype                                                   as REFlowType,
      dcindicator                                                as DebitCreditCode,
      //      taxgroupid,
      taxdate                                                    as RETaxCalcDate,
      //      termnooa             as RETermNumber, //termnopy has same element
      gsber                                                      as BusinessArea,
      prctr                                                      as ProfitCenter,
      //      addobjnr,
      cast( fund as bp_geber )                                   as Fund,
      cast( fundscenter as fm_fictr )                            as FundsCenter,
      cast( commitmentitem as fm_fipex preserving type )         as CommitmentItem,
      cast( functionalarea as fm_farea )                         as FunctionalArea,
      cast( grantnumber   as reravdmgrantnumber preserving type) as REFundsManagementGrantID,
      //      measure,
      //      budgetperiod,
      //      termnopy             as RETermNumber, //termnooa has same element
      //      cdsplitno,
      //            pymtmeth as REPaymentMethod,
      //      pymtmethcrmo,
      //      pymtblock,
      //      pymtterm,
      //      housebkid,
      //      housebkacc,
      //      bankdetailid,
      //      notetopayee,
      //      dunnarea,
      //      dunnkey,
      //      dunnblock,
      //      accdetkey,
      //      taxtype,
      //      taxgroup,
      //      isgross,
      //      taxcountry,
      //      partner,
      //      partnerobjnr,
      //      txjcd,
      //      iscdsplit,
      //      ctrule,
      //      ispartnerblocked,
      //      sepamndid,
      //      separeccrdid,
      //      termnowt,
      //      acctype,
      //      glaccsymb,
      //      glaccount,
      //      amount         as AmountInTransactionCurrency,
      //      grossamount,
      //      netamount,
      //      taxamount,
      //      currency       as TransactionCurrency,
      //      ctlcamount     as AmountInCompanyCodeCurrency,
      //      @Semantics.amount.currencyCode: 'RECashFlowLoclCurrency'
      //      ctlcgrossamount                                            as RETrnsltnRuleLoclGrossAmount,
      //      @Semantics.amount.currencyCode: 'RECashFlowLoclCurrency'
      //      ctlcnetamount                                              as RETrnsltnRuleLoclNetAmount,
      //      @Semantics.amount.currencyCode: 'RECashFlowLoclCurrency'
      //      ctlctaxamount                                              as RETrnsltnRuleLoclTaxAmount,
      //      ctlccurrkey    as CompanyCodeCurrency,
      //      ctfcamount     as AmountInBalanceTransacCrcy,
      //      ctfcgrossamount,
      //      ctfcnetamount,
      //      ctfctaxamount,
      //      ctfccurrkey    as BalanceTransactionCurrency
      //      taxrate,
      //      exttaxcode,
      //      extref1,
      //      extref2,
      //      extref3,
      //      extref4,
      assetobjnr                                         as REStatusObjectAsset,
      //      assetvaluedate,
      //      assetprocedure,
      iscompleteretirement                               as REValnIsCompleteRetirement,
      //      reduction_percentage

      /* Associations */
      _REDocumentHeader,
      _BusinessArea,
      _ProfitCenter

}
```
