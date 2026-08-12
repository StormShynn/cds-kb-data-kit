---
name: I_CUSTOMERCOMPANY
description: "Customer Company"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - customer
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_CUSTOMERCOMPANY

**Customer Company**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  | `kunnr` |  |  |
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `AccountingClerk` |  | |  | `busab` |  |  |
| `ReconciliationAccount` |  | |  | `akont` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `CustomerHeadOffice` |  | |  | `knrze` |  |  |
| `AlternativePayerAccount` |  | |  | `knrzb` |  |  |
| `PaymentBlockingReason` |  | |  | `zahls` |  |  |
| `InterestCalculationCode` |  | |  | `vzskz` |  |  |
| `InterestCalculationDate` |  | |  | `zindt` |  |  |
| `IntrstCalcFrequencyInMonths` |  | |  | `zinrt` |  |  |
| `CustomerAccountNote` |  | |  | `kverm` |  |  |
| `APARToleranceGroup` |  | |  | `togru` |  |  |
| `HouseBank` |  | |  | `hbkid` |  |  |
| `ItemIsToBePaidSeparately` |  | |  | `xpore` |  |  |
| `PaytAdviceIsSentbyEDI` |  | |  | `xedip` |  |  |
| `PhysicalInventoryBlockInd` |  | |  | `sperr` |  |  |
| `UserAtCustomer` |  | |  | `zsabe` |  |  |
| `AccountingClerkPhoneNumber` |  | |  | `tlfns` |  |  |
| `AccountingClerkFaxNumber` |  | |  | `tlfxs` |  |  |
| `AccountingClerkInternetAddress` |  | |  | `intad` |  |  |
| `AccountByCustomer` |  | |  | `eikto` |  |  |
| `IsToBeLocallyProcessed` |  | |  | `xdezv` |  |  |
| `CollectiveInvoiceVariant` |  | |  | `perkz` |  |  |
| `LayoutSortingRule` |  | |  | `zuawa` |  |  |
| `PaymentTerms` |  | |  | `zterm` |  |  |
| `CustomerSupplierClearingIsUsed` |  | |  | `xverr` |  |  |
| `RecordPaymentHistoryIndicator` |  | |  | `xzver` |  |  |
| `PaymentMethodsList` |  | |  | `zwels` |  |  |
| `DeletionIndicator` |  | |  | `loevm` |  |  |
| `CreditMemoPaymentTerms` |  | |  | `guzte` |  |  |
| `DunningNoticeGroup` |  | |  | `mgrup` |  |  |
| `LastInterestCalcRunDate` |  | |  | `datlz` |  |  |
| `CustPreviousMasterRecordNumber` |  | |  | `altkn` |  |  |
| `ValueAdjustmentKey` |  | |  | `wbrsl` |  |  |
| `CashPlanningGroup` |  | |  | `fdgrv` |  |  |
| `SupplierReleaseGroup` |  | |  | `frgrp` |  |  |
| `PersonnelNumber` |  | |  | `pernr` |  |  |
| `BuyingGroupAccountNumber` |  | |  | `ekvbd` |  |  |
| `BillExchChargePaymentTerms` |  | |  | `wakon` |  |  |
| `CheckPaidDurationInDays` |  | |  | `kultg` |  |  |
| `CustomerPaymentBlockingReason` |  | |  | `zahls` |  |  |
| `PaymentMethodSupplement` |  | |  | `uzawe` |  |  |
| `AcctsReceivablePledgingCode` |  | |  | `cession_kz` |  |  |
| `LockboxInternalID` |  | |  | `lockb` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `cvp_xblck_b` |  |  |
| `WithholdingTaxCountry` |  | |  | `qland` |  |  |
| `KnownOrNegotiatedLeave` |  | |  | `urlid` |  |  |
| `DeletionIsBlocked` |  | |  | `nodel` |  |  |
| `PaymentClearingGroup` |  | |  | `paymentclearinggrpid` |  |  |
| `PaymentReason` |  | |  | `paytrsn` |  |  |
| `BPPeriodicAccountStatement` |  | |  | `xausz` |  |  |
| `US_FrgnAcctTaxRcpntCntry` |  | |  | `us_rec_country` |  |  |
| `US_GlobIntermediaryIdnNumber` |  | |  | `us_giin` |  |  |
| `US_RecipientForeignTaxID` |  | |  | `us_ftid` |  |  |
| `US_LobTreatyCode` |  | |  | `us_lob_code` |  |  |
| `US_FW8BENReceiveDate` |  | |  | `us_w8_recvdate` |  |  |
| `US_FW9ReceiveDate` |  | |  | `us_w9_recvdate` |  |  |
| `US_SecondTINNoticeIsIssued` |  | |  | `us_tin_notice` |  |  |
| `US_FrgnRecipientHasPartnership` |  | |  | `us_partnership_ind` |  |  |
| `US_FrgnAcctTaxFilingIsRequired` |  | |  | `us_fatca_ind` |  |  |
| `US_Chapter4StatusCode` |  | |  | `us_chap4_status_code` |  |  |
| `LastDunnedOn` |  | | `_CustomerDefaultDunning` | `LastDunnedOn` |  |  |
| `DunningProcedure` |  | | `_CustomerDefaultDunning` | `DunningProcedure` |  |  |
| `DunningLevel` |  | | `_CustomerDefaultDunning` | `DunningLevel` |  |  |
| `DunningBlock` |  | | `_CustomerDefaultDunning` | `DunningBlock` |  |  |
| `DunningRecipient` |  | | `_CustomerDefaultDunning` | `DunningRecipient` |  |  |
| `LegDunningProcedureOn` |  | | `_CustomerDefaultDunning` | `LegDunningProcedureOn` |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `_Customer` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CustomerDunning` | | ✓ | | | | |
| `_CustomerDefaultDunning` | | ✓ | | | | |
| `_PaymentBlockValueHelp` | | ✓ | | | | |
| `_PaymentBlockingReasonText` | | ✓ | | | | |
| `_CashPlanningGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CustomerDunning` | `I_CustomerDunning` | [0..*] |
| `_CustomerDefaultDunning` | `I_CustomerDunning` | [0..1] |
| `_PaymentBlockValueHelp` | `I_PaymentBlockingReason` | [0..1] |
| `_PaymentBlockingReasonText` | `I_PaymentBlockingReasonText` | [0..*] |
| `_CashPlanningGroup` | `I_CashPlanningGroup` | [0..1] |
| `_CustCoExt` | `E_CUSCO_D` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Customer Company' //same as DDL description
//@Analytics: { dataCategory: #FACT }
@Analytics : {
          dataCategory: #DIMENSION,
          dataExtraction: {
           enabled: true,
           delta.changeDataCapture: {
           mapping:[
                {
                    table: 'KNB1', role: #MAIN,
                    viewElement: ['Customer','CompanyCode'],
                    tableElement: ['kunnr','bukrs']
                },
                {
                    table: 'KNB5', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['Customer' ,'CompanyCode'],
                    tableElement: ['kunnr' ,'bukrs']
                }
           ]
          }
         }
       }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'ICUSTCMPY' //must start with "I"
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern:#NONE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'CustomerCompanyCode' 
@ObjectModel.representativeKey:'CompanyCode'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['IsBusinessPurposeCompleted']
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_CustomerCompany //must start with "I_"; same as DDL source name in upper-camelcase notation
  as select from knb1

  association [1..1] to I_Customer                  as _Customer                  on  $projection.Customer = _Customer.Customer

  association [0..1] to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..*] to I_CustomerDunning           as _CustomerDunning           on  $projection.Customer    = _CustomerDunning.Customer
                                                                                  and $projection.CompanyCode = _CustomerDunning.CompanyCode

  //Default dunning area
  association [0..1] to I_CustomerDunning           as _CustomerDefaultDunning    on  $projection.Customer                = _CustomerDefaultDunning.Customer
                                                                                  and $projection.CompanyCode             = _CustomerDefaultDunning.CompanyCode
                                                                                  and _CustomerDefaultDunning.DunningArea = ''

  // Associations added for Text Annotation Removal
  association [0..1] to I_PaymentBlockingReason     as _PaymentBlockValueHelp     on  $projection.PaymentBlockingReason = _PaymentBlockValueHelp.PaymentBlockingReason

  association [0..*] to I_PaymentBlockingReasonText as _PaymentBlockingReasonText on  $projection.PaymentBlockingReason = _PaymentBlockingReasonText.PaymentBlockingReason

  association [0..1] to I_CashPlanningGroup         as _CashPlanningGroup         on  $projection.CashPlanningGroup = _CashPlanningGroup.CashPlanningGroup

  association [0..1] to E_CUSCO_D                   as _CustCoExt                 on  $projection.CompanyCode = _CustCoExt.CompanyCode
                                                                                  and $projection.Customer    = _CustCoExt.Customer

{

      //--[ GENERATED:012:GlBfhyJl7kY4i6}7dD1KRG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Customer'
  key kunnr                                           as Customer,
      //--[ GENERATED:012:GlBfhyJl7kY4i6}7dD1KRG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      //  @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                           as CompanyCode,
      //@ObjectModel.foreignKey.association: '_CustomerDunning'
      //key _CustomerDunning.DunningArea,

      busab                                           as AccountingClerk,
      akont                                           as ReconciliationAccount,
      begru                                           as AuthorizationGroup,
      knrze                                           as CustomerHeadOffice,
      knrzb                                           as AlternativePayerAccount,
      @ObjectModel: {
               foreignKey.association: '_PaymentBlockValueHelp'
             }
      @ObjectModel.text.association: '_PaymentBlockingReasonText'
      zahls                                           as PaymentBlockingReason,
      vzskz                                           as InterestCalculationCode,
      zindt                                           as InterestCalculationDate,
      zinrt                                           as IntrstCalcFrequencyInMonths,
      kverm                                           as CustomerAccountNote,
      togru                                           as APARToleranceGroup,
      hbkid                                           as HouseBank,
      xpore                                           as ItemIsToBePaidSeparately,
      xedip                                           as PaytAdviceIsSentbyEDI,

      //Following Fields are needed in BP Customer-Supplier App

      sperr                                           as PhysicalInventoryBlockInd,
      zsabe                                           as UserAtCustomer,
      tlfns                                           as AccountingClerkPhoneNumber,
      tlfxs                                           as AccountingClerkFaxNumber,
      intad                                           as AccountingClerkInternetAddress,
      eikto                                           as AccountByCustomer,
      xdezv                                           as IsToBeLocallyProcessed,
      perkz                                           as CollectiveInvoiceVariant,
      zuawa                                           as LayoutSortingRule,
      zterm                                           as PaymentTerms,
      xverr                                           as CustomerSupplierClearingIsUsed,
      xzver                                           as RecordPaymentHistoryIndicator,
      zwels                                           as PaymentMethodsList,
      loevm                                           as DeletionIndicator,
      guzte                                           as CreditMemoPaymentTerms,
      mgrup                                           as DunningNoticeGroup,
      datlz                                           as LastInterestCalcRunDate,
      altkn                                           as CustPreviousMasterRecordNumber,
      wbrsl                                           as ValueAdjustmentKey,
      @ObjectModel.foreignKey.association: '_CashPlanningGroup'
      fdgrv                                           as CashPlanningGroup,

      frgrp                                           as SupplierReleaseGroup,
      pernr                                           as PersonnelNumber,
      ekvbd                                           as BuyingGroupAccountNumber,
      wakon                                           as BillExchChargePaymentTerms,
      kultg                                           as CheckPaidDurationInDays,
      zahls                                           as CustomerPaymentBlockingReason,
      uzawe                                           as PaymentMethodSupplement,
      cession_kz                                      as AcctsReceivablePledgingCode,
      lockb                                           as LockboxInternalID,

      // added for Fiori app (F1993) Customer Summary Report as a part of  DPP (Data Protection & Privacy)
      cvp_xblck_b                                     as IsBusinessPurposeCompleted,
      // Added for CE 2005 development
      qland                                           as WithholdingTaxCountry,
      urlid                                           as KnownOrNegotiatedLeave,

      nodel                                           as DeletionIsBlocked,

      paymentclearinggrpid                            as PaymentClearingGroup,

      paytrsn                                         as PaymentReason,

      // Added Additional Fields

      xausz                                           as BPPeriodicAccountStatement,
      //  erdat                                           as RecordCreatedDate,
      //  ernam                                           as RecordCreatedByUser,
      //   zinrt                                           as InterestCalFrequencyInMonths,
      //   vrbkz                                           as CreditInsuranceInstitution,
      //   vlibb                                           as CustomerInsuredAmount,
      //   vrszl                                           as BPInsuranceLeadMonths,
      //   vrspr                                           as BPDeductiblePercentageRate,
      //   vrsnr                                           as CustomerInsuranceNumber,
      //   verdt                                           as BPInsuranceValidityDate,
      //   webtr                                           as CustomerBillOfExchange,
      //   blnkz                                           as BPSubsIndDeterReductionRate,
      //   zgrup                                           as BPKeyForPaymentGrouping,
      //   sregl                                           as BPSelectionRulePaymentAdvice,
      //   vrsdg                                           as BPReasonCodeConversionVersion,
      //   gricd                                           as BPActivityCodeGrossIncomeTax,
      //   gridt                                           as BPEmploymentTaxDistrType,
      //   confs                                           as BPChangeAuthorizationCompany,
      //   updat                                           as ChangesConfirmedDate,
      //   uptim                                           as LastChangeConfirmationTime,
      //    ad_hash                                         as ElectronicMailAddress,
      //    ciiucode                                        as BPMainEconomicActivity,
      //    xknzb                                           as AlternativePayerIsUsed,
      //   zamim                                           as PaymentNoticeToCustomer,
      //   zamiv                                           as PaymentNoticeToSalesDepartment,
      //    zamir                                           as PaymentNoticeToLegalDepartment,
      //    zamib                                           as PaymentNoticeAccountDepartment,
      //    zamio                                           as PaymentNoticeCustomerClearItem,
      //     avsnd                                           as SendPaymentAdvice,

      // Addition of US fields
      us_rec_country                                  as US_FrgnAcctTaxRcpntCntry,
      us_giin                                         as US_GlobIntermediaryIdnNumber,
      us_ftid                                         as US_RecipientForeignTaxID,
      us_lob_code                                     as US_LobTreatyCode,
      us_w8_recvdate                                  as US_FW8BENReceiveDate,
      us_w9_recvdate                                  as US_FW9ReceiveDate,
      us_tin_notice                                   as US_SecondTINNoticeIsIssued,
      us_partnership_ind                              as US_FrgnRecipientHasPartnership,
      us_fatca_ind                                    as US_FrgnAcctTaxFilingIsRequired,
      us_chap4_status_code                            as US_Chapter4StatusCode,



      // @VDM.deprecated: true    //Use  _CustomerDefaultDunning to expose the feild
      @Consumption.hidden: true
      _CustomerDefaultDunning.LastDunnedOn,

      // @VDM.deprecated: true    //Use  _CustomerDefaultDunning to expose the feild
      @Consumption.hidden: true
      _CustomerDefaultDunning.DunningProcedure,

      // @VDM.deprecated: true    //Use  _CustomerDefaultDunning to expose the feild
      @Consumption.hidden: true
      _CustomerDefaultDunning.DunningLevel,

      //  @VDM.deprecated: true    //Use  _CustomerDefaultDunning to expose the feild
      @Consumption.hidden: true
      _CustomerDefaultDunning.DunningBlock,

      //  @VDM.deprecated: true    //Use  _CustomerDefaultDunning to expose the feild
      @Consumption.hidden: true
      _CustomerDefaultDunning.DunningRecipient,

      //   @VDM.deprecated: true    //Use  _CustomerDefaultDunning to expose the feild
      @Consumption.hidden: true
      _CustomerDefaultDunning.LegDunningProcedureOn,

      //For extensibility
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity,


      // associations
      _Customer,
      _CompanyCode,
      _CustomerDunning,
      _CustomerDefaultDunning,
      _PaymentBlockValueHelp,
      _PaymentBlockingReasonText,
      _CashPlanningGroup
}
```
