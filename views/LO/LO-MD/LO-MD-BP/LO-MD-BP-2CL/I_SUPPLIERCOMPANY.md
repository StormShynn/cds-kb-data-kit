---
name: I_SUPPLIERCOMPANY
description: Suppliercompany
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - supplier
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIERCOMPANY

**Suppliercompany**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Supplier` | ✓ | |  | `lifnr` |
| `CompanyCode` | ✓ | |  | `bukrs` |
| `AuthorizationGroup` |  | |  | `begru` |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` |
| `PaymentBlockingReason` |  | |  | `zahls` |
| `SupplierIsBlockedForPosting` |  | |  | `sperr` |
| `IsBusinessPurposeCompleted` |  | |  | `cvp_xblck_b` |
| `AccountingClerk` |  | |  | `busab` |
| `AccountingClerkFaxNumber` |  | |  | `tlfxs` |
| `AccountingClerkPhoneNumber` |  | |  | `tlfns` |
| `AccountingClerkInternetAddress` |  | |  | `intad` |
| `SupplierClerk` |  | |  | `zsabe` |
| `SupplierClerkURL` |  | |  | `intad` |
| `PaymentMethodsList` |  | |  | `zwels` |
| `PaymentTerms` |  | |  | `zterm` |
| `ClearCustomerSupplier` |  | |  | `xverr` |
| `IsToBeLocallyProcessed` |  | |  | `xdezv` |
| `ItemIsToBePaidSeparately` |  | |  | `xpore` |
| `PaymentIsToBeSentByEDI` |  | |  | `xedip` |
| `HouseBank` |  | |  | `hbkid` |
| `CheckPaidDurationInDays` |  | |  | `kultg` |
| `Currency` |  | | `_CompanyCode` | `Currency` |
| `BillOfExchLmtAmtInCoCodeCrcy` |  | |  | `webtr` |
| `SupplierClerkIDBySupplier` |  | |  | `eikto` |
| `IsDoubleInvoice` |  | |  | `reprf` |
| `CustomerSupplierClearingIsUsed` |  | |  | `xverr` |
| `ReconciliationAccount` |  | |  | `akont` |
| `InterestCalculationCode` |  | |  | `vzskz` |
| `InterestCalculationDate` |  | |  | `zindt` |
| `IntrstCalcFrequencyInMonths` |  | |  | `zinrt` |
| `SupplierHeadOffice` |  | |  | `lnrze` |
| `AlternativePayee` |  | |  | `lnrzb` |
| `LayoutSortingRule` |  | |  | `zuawa` |
| `APARToleranceGroup` |  | |  | `togru` |
| `SuplrInvcVerificatTolGroup` |  | |  | `togrr` |
| `SupplierCertificationDate` |  | |  | `cerdt` |
| `SupplierAccountNote` |  | |  | `kverm` |
| `WithholdingTaxCountry` |  | |  | `qland` |
| `DeletionIndicator` |  | |  | `loevm` |
| `CashPlanningGroup` |  | |  | `fdgrv` |
| `IsToBeCheckedForDuplicates` |  | |  | `reprf` |
| `PersonnelNumber` |  | |  | `pernr` |
| `PreviousAccountNumber` |  | |  | `altkn` |
| `MinorityGroup` |  | |  | `mindk` |
| `LastInterestCalcRunDate` |  | |  | `datlz` |
| `US_ForeignSuplrHasPartnership` |  | |  | `us_partnership_ind` |
| `US_SecondTINNoticeIsIssued` |  | |  | `us_tin_notice` |
| `US_ForeignSuplrLmtnOnBnftCode` |  | |  | `us_lob_code` |
| `SupplierReleaseGroup` |  | |  | `frgrp` |
| `CreditMemoPaymentTerms` |  | |  | `guzte` |
| `PaymentMethodSupplement` |  | |  | `uzawe` |
| `US_FrgnAcctTaxFilingIsRequired` |  | |  | `us_fatca_ind` |
| `US_RecipientForeignTaxID` |  | |  | `us_ftid` |
| `US_FW9ReceiveDate` |  | |  | `us_w9_recvdate` |
| `US_FW8BENReceiveDate` |  | |  | `us_w8_recvdate` |
| `US_FrgnAcctTaxRcpntCntry` |  | |  | `us_rec_country` |
| `US_GlobIntermediaryIdnNumber` |  | |  | `us_giin` |
| `US_LobTreatyCode` |  | |  | `us_lob_code` |
| `US_Chapter4StatusCode` |  | |  | `us_chap4_status_code` |
| `PaymentClearingGroup` |  | |  | `paymentclearinggrpid` |
| `PaymentReason` |  | |  | `paytrsn` |
| `DeletionIsBlocked` |  | |  | `nodel` |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |
| `BPPeriodicAccountStatement` |  | |  | `xausz` |
| `_Supplier` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_PaymentBlockingReason` | | ✓ | | |
| `_APARToleranceGroupName` | | ✓ | | |
| `_PaymentTermsText` | | ✓ | | |
| `_PaymentBlockingReasonText` | | ✓ | | |
| `_WithholdingTax` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Supplier` | `I_Supplier` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_PaymentBlockingReason` | `I_PaymentBlockingReason` | [0..1] |
| `_APARToleranceGroupName` | `I_ToleranceGroupText` | [0..1] |
| `_PaymentTermsText` | `I_PaymentTermsText` | [0..*] |
| `_PaymentBlockingReasonText` | `I_PaymentBlockingReasonText` | [0..*] |
| `_WithholdingTax` | `I_Businesspartnerwhldgtax` | [0..*] |
| `_SupplierCoExt` | `E_SUPCO_D` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Supplier Company'
//@Analytics.dataCategory: #FACT //or #CUBE or #FACT
/*@Analytics : {
          dataCategory: #FACT,
          dataExtraction: {
           enabled: true,
           delta.changeDataCapture: {
           automatic: true
           }
         }
       }*/
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[

                {
                    table: 'lfb1', role: #MAIN,
                    viewElement: ['Supplier' ,'CompanyCode'],
                    tableElement: ['lifnr', 'bukrs']
                },

                {
                    table: 't001', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['CompanyCode'],
                    tableElement: ['bukrs']
                }
            ]
        }
    }
 }
@VDM.viewType: #BASIC
//@Search.searchable: true
@ClientHandling.algorithm : #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: 'IsBusinessPurposeCompleted'

@AbapCatalog.sqlViewName: 'ISUPPLCOMPANY'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.representativeKey:'CompanyCode'
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'SupplierCompanyCode'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_SupplierCompany
  as select from lfb1

  association [1..1] to I_Supplier                  as _Supplier                  on  $projection.Supplier = _Supplier.Supplier

  association [0..1] to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_PaymentBlockingReason     as _PaymentBlockingReason     on  $projection.PaymentBlockingReason = _PaymentBlockingReason.PaymentBlockingReason

  association [0..1] to I_ToleranceGroupText        as _APARToleranceGroupName    on  $projection.CompanyCode          = _APARToleranceGroupName.CompanyCode
                                                                                  and _APARToleranceGroupName.Language = $session.system_language
                                                                                  and $projection.APARToleranceGroup   = _APARToleranceGroupName.APARToleranceGroup

  association [0..*] to I_PaymentTermsText          as _PaymentTermsText          on  $projection.PaymentTerms = _PaymentTermsText.PaymentTerms

  association [0..*] to I_PaymentBlockingReasonText as _PaymentBlockingReasonText on  $projection.PaymentTerms = _PaymentBlockingReasonText.PaymentBlockingReason

  association [0..*] to I_Businesspartnerwhldgtax   as _WithholdingTax            on  $projection.Supplier    = _WithholdingTax.Supplier
                                                                                  and $projection.CompanyCode = _WithholdingTax.CompanyCode

  association [0..1] to E_SUPCO_D                   as _SupplierCoExt             on  $projection.CompanyCode = _SupplierCoExt.CompanyCode
                                                                                  and $projection.Supplier    = _SupplierCoExt.Supplier

{

      //--[ GENERATED:012:GlBfhyJl7kY4i6}7dD1KRG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Supplier_VH',
                     element: 'Supplier' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Supplier'
  key lifnr                                           as Supplier,
      //--[ GENERATED:012:GlBfhyJl7kY4i6}7dD1KRG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                           as CompanyCode,
      begru                                           as AuthorizationGroup,
      //@VDM.deprecated: true    //Use _Companycode to expose the feild
      @Consumption.hidden: true
      _CompanyCode.CompanyCodeName                    as CompanyCodeName,
      zahls                                           as PaymentBlockingReason,
      sperr                                           as SupplierIsBlockedForPosting,
      cvp_xblck_b                                     as IsBusinessPurposeCompleted,
      busab                                           as AccountingClerk,
      tlfxs                                           as AccountingClerkFaxNumber,
      tlfns                                           as AccountingClerkPhoneNumber,
      intad                                           as AccountingClerkInternetAddress,
      zsabe                                           as SupplierClerk,
      intad                                           as SupplierClerkURL,
      zwels                                           as PaymentMethodsList,
      zterm                                           as PaymentTerms,
      xverr                                           as ClearCustomerSupplier,
      xdezv                                           as IsToBeLocallyProcessed,
      xpore                                           as ItemIsToBePaidSeparately,
      xedip                                           as PaymentIsToBeSentByEDI,
      hbkid                                           as HouseBank,
      kultg                                           as CheckPaidDurationInDays,
      @Semantics.currencyCode: true
      _CompanyCode.Currency                           as Currency,
      @Semantics.amount.currencyCode: 'Currency'
      webtr                                           as BillOfExchLmtAmtInCoCodeCrcy,
      eikto                                           as SupplierClerkIDBySupplier,
      reprf                                           as IsDoubleInvoice,
      xverr                                           as CustomerSupplierClearingIsUsed,
      akont                                           as ReconciliationAccount,
      vzskz                                           as InterestCalculationCode,
      zindt                                           as InterestCalculationDate,
      zinrt                                           as IntrstCalcFrequencyInMonths,
      lnrze                                           as SupplierHeadOffice,
      lnrzb                                           as AlternativePayee,
      zuawa                                           as LayoutSortingRule,
      togru                                           as APARToleranceGroup,
      togrr                                           as SuplrInvcVerificatTolGroup,
      cerdt                                           as SupplierCertificationDate,
      kverm                                           as SupplierAccountNote,
      qland                                           as WithholdingTaxCountry,

      loevm                                           as DeletionIndicator,
      fdgrv                                           as CashPlanningGroup,
      reprf                                           as IsToBeCheckedForDuplicates,

      pernr                                           as PersonnelNumber,
      altkn                                           as PreviousAccountNumber,
      mindk                                           as MinorityGroup,
      datlz                                           as LastInterestCalcRunDate,

      us_partnership_ind                              as US_ForeignSuplrHasPartnership,
      us_tin_notice                                   as US_SecondTINNoticeIsIssued,
      us_lob_code                                     as US_ForeignSuplrLmtnOnBnftCode,
      frgrp                                           as SupplierReleaseGroup,
      guzte                                           as CreditMemoPaymentTerms,


      uzawe                                           as PaymentMethodSupplement,
      us_fatca_ind                                    as US_FrgnAcctTaxFilingIsRequired,
      us_ftid                                         as US_RecipientForeignTaxID,
      us_w9_recvdate                                  as US_FW9ReceiveDate,
      us_w8_recvdate                                  as US_FW8BENReceiveDate,
      us_rec_country                                  as US_FrgnAcctTaxRcpntCntry,
      us_giin                                         as US_GlobIntermediaryIdnNumber,
      us_lob_code                                     as US_LobTreatyCode,
      us_chap4_status_code                            as US_Chapter4StatusCode,

      paymentclearinggrpid                            as PaymentClearingGroup,
      paytrsn                                         as PaymentReason,
      nodel                                           as DeletionIsBlocked,


      //for extensibility
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity,

      xausz                                           as BPPeriodicAccountStatement,

      _PaymentBlockingReason,
      _PaymentBlockingReasonText,
      _PaymentTermsText,
      _APARToleranceGroupName,
      _WithholdingTax,
      _CompanyCode,
      _Supplier

}
```
