---
name: I_CONTRACTACCOUNTPARTNER
description: "Contractaccountpartner"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - contract
  - partner
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACTACCOUNTPARTNER

**Contractaccountpartner**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContractAccount` | ✓ | |  | `vkont` |  |  |
| `BusinessPartner` | ✓ | |  | `gpart` |  |  |
| `ContractAccountName` |  | |  | `vkbez` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `ertim` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `IsMarkedForDeletion` |  | |  | `cast( loevm as loevm preserving type )` |  |  |
| `LastChangeDate` |  | |  | `aedatp` |  |  |
| `LastChangeTime` |  | |  | `aetimp` |  |  |
| `LastChangedByUser` |  | |  | `aenamp` |  |  |
| `CABankIDForIncomingPayments` |  | |  | `ebvty` |  |  |
| `CABankIDForOutgoingPayments` |  | |  | `abvty` |  |  |
| `CAIncomingPaymentMethod` |  | |  | `ezawe` |  |  |
| `CACnctntdOutgPaymentMethods` |  | |  | `azawe` |  |  |
| `CAFirstOutgoingPaymentMethod` |  | |  | `cast (substring(azawe, 1, 1) as azawe1_conacct_kk preserving type)` |  |  |
| `CASecondOutgoingPaymentMethod` |  | |  | `cast (substring(azawe, 2, 1) as azawe2_conacct_kk preserving type)` |  |  |
| `CAThirdOutgoingPaymentMethod` |  | |  | `cast (substring(azawe, 3, 1) as azawe3_conacct_kk preserving type)` |  |  |
| `CAFourthOutgoingPaymentMethod` |  | |  | `cast (substring(azawe, 4, 1) as azawe4_conacct_kk preserving type)` |  |  |
| `CAFifthOutgoingPaymentMethod` |  | |  | `cast (substring(azawe, 5, 1) as azawe5_conacct_kk preserving type)` |  |  |
| `CAHouseBankReference` |  | |  | `eigbv` |  |  |
| `CAPaymentCardIDForIncomingPayt` |  | |  | `ccard_id` |  |  |
| `CAPaymentCardIDForOutgoingPayt` |  | |  | `ccard_out` |  |  |
| `SEPAMandate` |  | |  | `mndid` |  |  |
| `CADunningProcedure` |  | |  | `mahnv` |  |  |
| `CADunningNoticeGroup` |  | |  | `mgrup` |  |  |
| `CACorrespondenceDunningProced` |  | |  | `corr_mahnv` |  |  |
| `CACollectionsClerk` |  | |  | `persr` |  |  |
| `CACollectionsMasterDataGroup` |  | |  | `cmgrp` |  |  |
| `CACollectionStrategy` |  | |  | `strat` |  |  |
| `CACollectionsContactPerson` |  | |  | `cpers` |  |  |
| `ContractAccountForPayment` |  | |  | `vkonv` |  |  |
| `CABusinessPartnerForPayment` |  | |  | `gparv` |  |  |
| `CAAlternativePayer` |  | |  | `abwre` |  |  |
| `CAAlternativePayee` |  | |  | `abwra` |  |  |
| `CAAlternativeDunningRecipient` |  | |  | `abwma` |  |  |
| `CAAlternativeInvoiceRecipient` |  | |  | `abwrh` |  |  |
| `CAAlternativeCorrespncRcpnt` |  | |  | `def_rec` |  |  |
| `CAAddressIDOfAlternativePayer` |  | |  | `adrre` |  |  |
| `CAAddressIDOfAlternativePayee` |  | |  | `adrra` |  |  |
| `CAAddressIDOfAltvDunRecipient` |  | |  | `adrma` |  |  |
| `CAAddressIDOfAltvInvoiceRcpnt` |  | |  | `adrrh` |  |  |
| `CACurrencyForDirectDebitLimit` |  | |  | `ddlcu` |  |  |
| `CADirectDebitLimit` |  | |  | `ddlam` |  |  |
| `CANmbrMnthsForDirectDebitLimit` |  | |  | `ddlnm` |  |  |
| `CADirectDebitLimitCalcMode` |  | |  | `ddlxg` |  |  |
| `CAStartDateForBillingPeriod` |  | |  | `inv_cycle_start` |  |  |
| `ContrAcctPrtnHasInvcgChrgDsc` |  | |  | `inv_chgdisc_x` |  |  |
| `CATargetCurrencyForInvoicing` |  | |  | `inv_curr` |  |  |
| `CAInvcgCategory` |  | |  | `inv_category` |  |  |
| `CAInvcgSchedule` |  | |  | `inv_schedule` |  |  |
| `CABillgCycle` |  | |  | `inv_cycle` |  |  |
| `CALastDayOfBillingPeriod` |  | |  | `inv_cycle_day` |  |  |
| `CADetnCodeForAltvInvoiceForm` |  | |  | `inv_form_det_key` |  |  |
| `CABusinessPartnerForPosting` |  | |  | `gpart_inv` |  |  |
| `ContractAccountForPosting` |  | |  | `vkont_inv` |  |  |
| `CABusinessPartnerForInvcgList` |  | |  | `gpart_invlist` |  |  |
| `ContractAccountForInvcgList` |  | |  | `vkont_invlist` |  |  |
| `CAMasterAgreement` |  | |  | `makey` |  |  |
| `CAPartnerSettlementRule` |  | |  | `ptsrl` |  |  |
| `ValdtyDateForWhldgTaxExmpCert` |  | |  | `qszdt` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `OutgPaytWithholdingTaxCode` |  | |  | `qsskz_a` |  |  |
| `IncgPaytWithholdingTaxCode` |  | |  | `qsskz_e` |  |  |
| `WithholdingTaxCertificate` |  | |  | `qsznr` |  |  |
| `CAAdditionalDaysForCashMgmt` |  | |  | `fdztg` |  |  |
| `CABusPartnerPostgLockExstcCode` |  | |  | `bpl_xpocl` |  |  |
| `CABusPartnerAddlLockExstcCode` |  | |  | `bpl_xaddl` |  |  |
| `CABusinessPartnerLockStartDate` |  | |  | `bpl_fdate` |  |  |
| `CABusinessPartnerLockEndDate` |  | |  | `bpl_tdate` |  |  |
| `CABPReferenceNumber` |  | |  | `exvko` |  |  |
| `CACompanyCodeGroup` |  | |  | `opbuk` |  |  |
| `CAStandardCompanyCode` |  | |  | `stdbk` |  |  |
| `AltvContractAcctForCollvBills` |  | |  | `abwvk` |  |  |
| `CAInterestCode` |  | |  | `ikey` |  |  |
| `CashPlanningGroup` |  | |  | `fdgrp` |  |  |
| `CARelationshipOfBPToContrAcct` |  | |  | `vkpbz` |  |  |
| `AddressID` |  | |  | `adrnb` |  |  |
| `CAAddressIDOfJurisdictionCode` |  | |  | `adrjdc` |  |  |
| `CAAuthorizationGroup` |  | |  | `begru` |  |  |
| `CAToleranceGroup` |  | |  | `togru` |  |  |
| `CACorrespondenceVariant` |  | |  | `coprc` |  |  |
| `PartnerCompany` |  | |  | `vbund` |  |  |
| `CACorrespondenceActivityCode` |  | |  | `def_rec_ind` |  |  |
| `CAClearingCategory` |  | |  | `vertyp` |  |  |
| `CADefaultClearingRstrcnCode` |  | |  | `augrs_def` |  |  |
| `SupplyingCountry` |  | |  | `landl` |  |  |
| `BusinessPlace` |  | |  | `bupla` |  |  |
| `CASubledgerApplication` |  | |  | `trsla` |  |  |
| `PaymentCondition` |  | |  | `zahlkond` |  |  |
| `CAAccountDeterminationCode` |  | |  | `kofiz_sd` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `CAPaymentCompanyCode` |  | | `_CompCodeGroup` | `CAPaymentCompanyCode` |  |  |
| `Country` |  | | `_CompCodeGroup._CompanyCode` | `Country` |  |  |
| `CABusinessPartnerLock` |  | |  | `bpl_xpocl` |  |  |
| `CAClearingRestriction` |  | |  | `augrs_def` |  |  |
| `CAPaymentMethodForIncgPayment` |  | |  | `ezawe` |  |  |
| `CAPaymentMethodForOutgPayment` |  | |  | `azawe` |  |  |
| `CAWhldgTaxCodeOutgoingPayt` |  | |  | `qsskz_a` |  |  |
| `CAWhldgTaxCodeIncomingPayt` |  | |  | `qsskz_e` |  |  |
| `_CorrVariant` |  | |  | `_CorrespncVar` |  |  |
| `_BusinessArea` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_AlternativePayer` | | ✓ | | | | |
| `_AlternativePayee` | | ✓ | | | | |
| `_AltvDunningRecipient` | | ✓ | | | | |
| `_AltvInvoiceRecipient` | | ✓ | | | | |
| `_AltvCorrespncRcpnt` | | ✓ | | | | |
| `_BPForPayment` | | ✓ | | | | |
| `_CollContactPerson` | | ✓ | | | | |
| `_CollectionsClerk` | | ✓ | | | | |
| `_BPForPosting` | | ✓ | | | | |
| `_BPForInvcgList` | | ✓ | | | | |
| `_BusinessPlace` | | ✓ | | | | |
| `_AcctDetnCode` | | ✓ | | | | |
| `_CAAuthorizationGroup` | | ✓ | | | | |
| `_BillgCycle` | | ✓ | | | | |
| `_CABusPrtnAddlLockExstcCode` | | ✓ | | | | |
| `_CABusPrtnPostgLockExstcCode` | | ✓ | | | | |
| `_ClearingCategory` | | ✓ | | | | |
| `_CollectionStrategy` | | ✓ | | | | |
| `_CollMasterDataGroup` | | ✓ | | | | |
| `_CompCodeGroup` | | ✓ | | | | |
| `_CACorrespncActivityCode` | | ✓ | | | | |
| `_CorrespncVar` | | ✓ | | | | |
| `_CADfltClearingRstrcnCode` | | ✓ | | | | |
| `_CADirectDebitLimitCalcMod` | | ✓ | | | | |
| `_DunningProcedure` | | ✓ | | | | |
| `_CorrespncDunningProcedure` | | ✓ | | | | |
| `_DunNoticeGroup` | | ✓ | | | | |
| `_HouseBankRef` | | ✓ | | | | |
| `_InterestCode` | | ✓ | | | | |
| `_InvcgCategory` | | ✓ | | | | |
| `_InvcgSchedule` | | ✓ | | | | |
| `_MasterAgreement` | | ✓ | | | | |
| `_CAIncomingPaymentMethod` | | ✓ | | | | |
| `_CAFirstOutgoingPaymentMethod` | | ✓ | | | | |
| `_CASecondOutgoingPaymentMethod` | | ✓ | | | | |
| `_CAThirdOutgoingPaymentMethod` | | ✓ | | | | |
| `_CAFourthOutgoingPaymentMethod` | | ✓ | | | | |
| `_CAFifthOutgoingPaymentMethod` | | ✓ | | | | |
| `_CAPartnerSettlementRule` | | ✓ | | | | |
| `_CashPlanningGroup` | | ✓ | | | | |
| `_CASubledgerApplication` | | ✓ | | | | |
| `_ToleranceGroup` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_PaymentCompCode` | | ✓ | | | | |
| `_RelshpOfBP` | | ✓ | | | | |
| `_ContrAcc` | | ✓ | | | | |
| `_AltvContrAcc` | | ✓ | | | | |
| `_ContrAcctForPayt` | | ✓ | | | | |
| `_ContrAcctForPosting` | | ✓ | | | | |
| `_ContrAcctForInvcgList` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_SupplyingCountry` | | ✓ | | | | |
| `_CurrencyForDDL` | | ✓ | | | | |
| `_CurrencyForInvoicing` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PaymentCondition` | | ✓ | | | | |
| `_PaytMethodIncg` | | ✓ | | | | |
| `_PaytMethodOutg` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_AlternativePayer` | `I_BusinessPartner` | [0..1] |
| `_AlternativePayee` | `I_BusinessPartner` | [0..1] |
| `_AltvDunningRecipient` | `I_BusinessPartner` | [0..1] |
| `_AltvInvoiceRecipient` | `I_BusinessPartner` | [0..1] |
| `_AltvCorrespncRcpnt` | `I_BusinessPartner` | [0..1] |
| `_BPForPayment` | `I_BusinessPartner` | [0..1] |
| `_CollContactPerson` | `I_BusinessPartner` | [0..1] |
| `_CollectionsClerk` | `I_BusinessPartner` | [0..1] |
| `_BPForPosting` | `I_BusinessPartner` | [0..1] |
| `_BPForInvcgList` | `I_BusinessPartner` | [0..1] |
| `_BusinessPlace` | `I_BusinessPlace` | [0..1] |
| `_AcctDetnCode` | `I_CAAccountDetnCode` | [0..1] |
| `_CAAuthorizationGroup` | `I_CAAuthorizationGroup` | [0..1] |
| `_BillgCycle` | `I_CABillgCycle` | [1..1] |
| `_CABusPrtnAddlLockExstcCode` | `I_CABusPrtnAddlLockExstcCode` | [0..1] |
| `_CABusPrtnPostgLockExstcCode` | `I_CABusPrtnPostgLockExstcCode` | [0..1] |
| `_ClearingCategory` | `I_CAClearingCategory` | [0..1] |
| `_CollectionStrategy` | `I_CACollectionStrategy` | [0..1] |
| `_CollMasterDataGroup` | `I_CACollMasterDataGroup` | [0..1] |
| `_CompCodeGroup` | `I_CACompanyCodeGroup` | [1..1] |
| `_CACorrespncActivityCode` | `I_CACorrespncActivityCode` | [0..1] |
| `_CorrespncVar` | `I_CACorrespondenceVariant` | [1..1] |
| `_CADfltClearingRstrcnCode` | `I_CADfltClearingRstrcnCode` | [1..1] |
| `_CADirectDebitLimitCalcMod` | `I_CADirectDebitLimitCalcMode` | [0..1] |
| `_DunningProcedure` | `I_CADunningProcedure` | [0..1] |
| `_CorrespncDunningProcedure` | `I_CADunningProcedure` | [0..1] |
| `_DunNoticeGroup` | `I_CADunningNoticeGroup` | [0..1] |
| `_HouseBankRef` | `I_CAHouseBankReference` | [0..1] |
| `_InterestCode` | `I_CAInterestCode` | [0..1] |
| `_InvcgCategory` | `I_CAInvcgCategory` | [0..1] |
| `_InvcgSchedule` | `I_CAInvcgSchedule` | [1..1] |
| `_MasterAgreement` | `I_CAMasterAgreement` | [1..1] |
| `_CAIncomingPaymentMethod` | `I_CAIncomingPaymentMethod` | [0..1] |
| `_CAFirstOutgoingPaymentMethod` | `I_CAOutgoingPaymentMethod` | [0..1] |
| `_CASecondOutgoingPaymentMethod` | `I_CAOutgoingPaymentMethod` | [0..1] |
| `_CAThirdOutgoingPaymentMethod` | `I_CAOutgoingPaymentMethod` | [0..1] |
| `_CAFourthOutgoingPaymentMethod` | `I_CAOutgoingPaymentMethod` | [0..1] |
| `_CAFifthOutgoingPaymentMethod` | `I_CAOutgoingPaymentMethod` | [0..1] |
| `_CAPartnerSettlementRule` | `I_CAPartnerSettlementRule` | [1..1] |
| `_CashPlanningGroup` | `I_CashPlanningGroup` | [0..1] |
| `_CASubledgerApplication` | `I_CASubledgerApplication` | [0..1] |
| `_ToleranceGroup` | `I_CAToleranceGroup` | [0..1] |
| `_CompCode` | `I_CompanyCode` | [1..1] |
| `_PaymentCompCode` | `I_CompanyCode` | [1..1] |
| `_RelshpOfBP` | `I_ContrAcctPrtnRelshpType` | [0..1] |
| `_ContrAcc` | `I_ContractAccountHeader` | [1..1] |
| `_AltvContrAcc` | `I_ContractAccountHeader` | [0..1] |
| `_ContrAcctForPayt` | `I_ContractAccountHeader` | [0..1] |
| `_ContrAcctForPosting` | `I_ContractAccountHeader` | [0..1] |
| `_ContrAcctForInvcgList` | `I_ContractAccountHeader` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_SupplyingCountry` | `I_Country` | [0..1] |
| `_CurrencyForDDL` | `I_Currency` | [0..1] |
| `_CurrencyForInvoicing` | `I_Currency` | [0..1] |
| `_PartnerCompany` | `I_Globalcompany` | [0..1] |
| `_PaymentCondition` | `I_PaymentCondition` | [0..1] |
| `_Extension` | `E_ContractAccountPartner` | [1..1] |
| `_PaytMethodIncg` | `I_CAPaymentMethod` | [0..1] |
| `_PaytMethodOutg` | `I_CAPaymentMethod` | [0..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture: { mapping: [ { table        : 'FKKVKP',
                                                                        role         : #MAIN,
                                                                        viewElement  : ['ContractAccount', 'BusinessPartner'],
                                                                        tableElement : ['VKONT', 'GPART'] },
                                                                      { table        : 'T001',
                                                                        role         : #LEFT_OUTER_TO_ONE_JOIN,
                                                                        viewElement  : ['CAStandardCompanyCode'],
                                                                        tableElement : ['BUKRS'] },
                                                                      { table        : 'TFK001G',
                                                                        role         : #LEFT_OUTER_TO_ONE_JOIN,
                                                                        viewElement  : ['CACompanyCodeGroup'],
                                                                        tableElement : ['OPBUK'] } ] } },
              technicalName: 'ICTRACCPARTNER' }


@EndUserText.label: 'Contract Account Partner'

@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations: true }

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'BusinessPartner',
                sapObjectNodeType.name: 'ContractAccountPartner',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #ANALYTICAL_DIMENSION  ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #B,
                             sizeCategory: #XL } }

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'VKP',
  dataSources: [ '_Extension' ],
  quota: {
    maximumFields: 170, 
    maximumBytes: 3400  
  }
}                         

@VDM.viewType: #BASIC

define view entity I_ContractAccountPartner
  as select from fkkvkp

  association [0..1] to I_BusinessArea                as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [1..1] to I_BusinessPartner             as _BusinessPartner               on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BusinessPartner             as _AlternativePayer              on  $projection.CAAlternativePayer = _AlternativePayer.BusinessPartner
  association [0..1] to I_BusinessPartner             as _AlternativePayee              on  $projection.CAAlternativePayee = _AlternativePayee.BusinessPartner
  association [0..1] to I_BusinessPartner             as _AltvDunningRecipient          on  $projection.CAAlternativeDunningRecipient = _AltvDunningRecipient.BusinessPartner
  association [0..1] to I_BusinessPartner             as _AltvInvoiceRecipient          on  $projection.CAAlternativeInvoiceRecipient = _AltvInvoiceRecipient.BusinessPartner
  association [0..1] to I_BusinessPartner             as _AltvCorrespncRcpnt            on  $projection.CAAlternativeCorrespncRcpnt = _AltvCorrespncRcpnt.BusinessPartner
  association [0..1] to I_BusinessPartner             as _BPForPayment                  on  $projection.CABusinessPartnerForPayment = _BPForPayment.BusinessPartner
  association [0..1] to I_BusinessPartner             as _CollContactPerson             on  $projection.CACollectionsContactPerson = _CollContactPerson.BusinessPartner
  association [0..1] to I_BusinessPartner             as _CollectionsClerk              on  $projection.CACollectionsClerk = _CollectionsClerk.BusinessPartner
  association [0..1] to I_BusinessPartner             as _BPForPosting                  on  $projection.CABusinessPartnerForPosting = _BPForPosting.BusinessPartner
  association [0..1] to I_BusinessPartner             as _BPForInvcgList                on  $projection.CABusinessPartnerForInvcgList = _BPForInvcgList.BusinessPartner
  association [0..1] to I_BusinessPlace               as _BusinessPlace                 on  $projection.BusinessPlace = _BusinessPlace.BusinessPlace
                                                                                        and $projection.CAStandardCompanyCode = _BusinessPlace.CompanyCode  
  association [0..1] to I_CAAccountDetnCode           as _AcctDetnCode                  on  $projection.CAAccountDeterminationCode = _AcctDetnCode.CAAccountDeterminationCode
  association [0..1] to I_CAAuthorizationGroup        as _CAAuthorizationGroup          on  $projection.CAAuthorizationGroup                 = _CAAuthorizationGroup.CAAuthorizationGroup
                                                                                        and _CAAuthorizationGroup.CAAuthorizationGroupObject = 'CA_CONTACC'
  association [1..1] to I_CABillgCycle                as _BillgCycle                    on  $projection.CABillgCycle = _BillgCycle.CABillgCycle
  association [0..1] to I_CABusPrtnAddlLockExstcCode  as _CABusPrtnAddlLockExstcCode    on  $projection.CABusPartnerAddlLockExstcCode = _CABusPrtnAddlLockExstcCode.CABusPartnerAddlLockExstcCode
  association [0..1] to I_CABusPrtnPostgLockExstcCode as _CABusPrtnPostgLockExstcCode   on  $projection.CABusPartnerPostgLockExstcCode = _CABusPrtnPostgLockExstcCode.CABusPartnerPostgLockExstcCode
  association [0..1] to I_CAClearingCategory          as _ClearingCategory              on  $projection.CAClearingCategory = _ClearingCategory.CAClearingCategory
  association [0..1] to I_CACollectionStrategy        as _CollectionStrategy            on  $projection.CACollectionStrategy = _CollectionStrategy.CACollectionStrategy
  association [0..1] to I_CACollMasterDataGroup       as _CollMasterDataGroup           on  $projection.CACollectionsMasterDataGroup = _CollMasterDataGroup.CACollectionsMasterDataGroup
  association [1..1] to I_CACompanyCodeGroup          as _CompCodeGroup                 on  $projection.CACompanyCodeGroup = _CompCodeGroup.CACompanyCodeGroup
  association [0..1] to I_CACorrespncActivityCode     as _CACorrespncActivityCode       on  $projection.CACorrespondenceActivityCode = _CACorrespncActivityCode.CACorrespondenceActivityCode
  association [1..1] to I_CACorrespondenceVariant     as _CorrespncVar                  on  $projection.CACorrespondenceVariant = _CorrespncVar.CACorrespondenceVariant
  association [1..1] to I_CADfltClearingRstrcnCode    as _CADfltClearingRstrcnCode      on  $projection.CADefaultClearingRstrcnCode = _CADfltClearingRstrcnCode.CADefaultClearingRstrcnCode
  association [0..1] to I_CADirectDebitLimitCalcMode  as _CADirectDebitLimitCalcMod     on  $projection.CADirectDebitLimitCalcMode = _CADirectDebitLimitCalcMod.CADirectDebitLimitCalcMode
  association [0..1] to I_CADunningProcedure          as _DunningProcedure              on  $projection.CADunningProcedure = _DunningProcedure.CADunningProcedure
  association [0..1] to I_CADunningProcedure          as _CorrespncDunningProcedure     on  $projection.CACorrespondenceDunningProced             = _CorrespncDunningProcedure.CADunningProcedure
                                                                                        and _CorrespncDunningProcedure.CADunningProcedureCategory = '05'
  association [0..1] to I_CADunningNoticeGroup        as _DunNoticeGroup                on  $projection.CADunningNoticeGroup = _DunNoticeGroup.CADunningNoticeGroup
  association [0..1] to I_CAHouseBankReference        as _HouseBankRef                  on  $projection.CAPaymentCompanyCode = _HouseBankRef.CAPaymentCompanyCode
                                                                                        and $projection.CAHouseBankReference = _HouseBankRef.CAHouseBankReference
  association [0..1] to I_CAInterestCode              as _InterestCode                  on  $projection.CAInterestCode = _InterestCode.CAInterestCode
  association [0..1] to I_CAInvcgCategory             as _InvcgCategory                 on  $projection.CAInvcgCategory = _InvcgCategory.CAInvcgCategory
  association [1..1] to I_CAInvcgSchedule             as _InvcgSchedule                 on  $projection.CAInvcgSchedule = _InvcgSchedule.CAInvcgSchedule
  association [1..1] to I_CAMasterAgreement           as _MasterAgreement               on  $projection.CAMasterAgreement = _MasterAgreement.CAMasterAgreement
  association [0..1] to I_CAIncomingPaymentMethod     as _CAIncomingPaymentMethod       on  $projection.Country = _CAIncomingPaymentMethod.Country
                                                                                        and $projection.CAIncomingPaymentMethod = _CAIncomingPaymentMethod.CAIncomingPaymentMethod
  association [0..1] to I_CAOutgoingPaymentMethod     as _CAFirstOutgoingPaymentMethod  on  $projection.Country = _CAFirstOutgoingPaymentMethod.Country
                                                                                        and $projection.CAFirstOutgoingPaymentMethod = _CAFirstOutgoingPaymentMethod.CAOutgoingPaymentMethod
  association [0..1] to I_CAOutgoingPaymentMethod     as _CASecondOutgoingPaymentMethod on  $projection.Country = _CASecondOutgoingPaymentMethod.Country
                                                                                        and $projection.CASecondOutgoingPaymentMethod = _CASecondOutgoingPaymentMethod.CAOutgoingPaymentMethod
  association [0..1] to I_CAOutgoingPaymentMethod     as _CAThirdOutgoingPaymentMethod  on  $projection.Country = _CAThirdOutgoingPaymentMethod.Country
                                                                                        and $projection.CAThirdOutgoingPaymentMethod = _CAThirdOutgoingPaymentMethod.CAOutgoingPaymentMethod
  association [0..1] to I_CAOutgoingPaymentMethod     as _CAFourthOutgoingPaymentMethod on  $projection.Country = _CAFourthOutgoingPaymentMethod.Country
                                                                                        and $projection.CAFourthOutgoingPaymentMethod = _CAFourthOutgoingPaymentMethod.CAOutgoingPaymentMethod
  association [0..1] to I_CAOutgoingPaymentMethod     as _CAFifthOutgoingPaymentMethod  on  $projection.Country = _CAFifthOutgoingPaymentMethod.Country
                                                                                        and $projection.CAFifthOutgoingPaymentMethod = _CAFifthOutgoingPaymentMethod.CAOutgoingPaymentMethod
  association [1..1] to I_CAPartnerSettlementRule     as _CAPartnerSettlementRule       on  $projection.CAPartnerSettlementRule = _CAPartnerSettlementRule.CAPartnerSettlementRule
  association [0..1] to I_CashPlanningGroup           as _CashPlanningGroup             on  $projection.CashPlanningGroup = _CashPlanningGroup.CashPlanningGroup
  association [0..1] to I_CASubledgerApplication      as _CASubledgerApplication        on  $projection.CASubledgerApplication = _CASubledgerApplication.CASubledgerApplication
  association [0..1] to I_CAToleranceGroup            as _ToleranceGroup                on  $projection.CAToleranceGroup = _ToleranceGroup.CAToleranceGroup
  association [1..1] to I_CompanyCode                 as _CompCode                      on  $projection.CAStandardCompanyCode = _CompCode.CompanyCode
  association [1..1] to I_CompanyCode                 as _PaymentCompCode               on  $projection.CAPaymentCompanyCode = _PaymentCompCode.CompanyCode
  association [0..1] to I_ContrAcctPrtnRelshpType     as _RelshpOfBP                    on  $projection.CARelationshipOfBPToContrAcct = _RelshpOfBP.CARelationshipOfBPToContrAcct
  association [1..1] to I_ContractAccountHeader       as _ContrAcc                      on  $projection.ContractAccount = _ContrAcc.ContractAccount
  association [0..1] to I_ContractAccountHeader       as _AltvContrAcc                  on  $projection.AltvContractAcctForCollvBills = _AltvContrAcc.ContractAccount
  association [0..1] to I_ContractAccountHeader       as _ContrAcctForPayt              on  $projection.ContractAccountForPayment = _ContrAcctForPayt.ContractAccount
  association [0..1] to I_ContractAccountHeader       as _ContrAcctForPosting           on  $projection.ContractAccountForPosting = _ContrAcctForPosting.ContractAccount
  association [0..1] to I_ContractAccountHeader       as _ContrAcctForInvcgList         on  $projection.ContractAccountForInvcgList = _ContrAcctForInvcgList.ContractAccount
  association [0..1] to I_Country                     as _Country                       on  $projection.Country = _Country.Country
  association [0..1] to I_Country                     as _SupplyingCountry              on  $projection.SupplyingCountry = _SupplyingCountry.Country
  association [0..1] to I_Currency                    as _CurrencyForDDL                on  $projection.CACurrencyForDirectDebitLimit = _CurrencyForDDL.Currency
  association [0..1] to I_Currency                    as _CurrencyForInvoicing          on  $projection.CATargetCurrencyForInvoicing = _CurrencyForInvoicing.Currency
  association [0..1] to I_Globalcompany               as _PartnerCompany                on  $projection.PartnerCompany = _PartnerCompany.Company
  association [0..1] to I_PaymentCondition            as _PaymentCondition              on  $projection.PaymentCondition = _PaymentCondition.PaymentCondition

  association [1..1] to E_ContractAccountPartner      as _Extension                     on  $projection.ContractAccount = _Extension.ContractAccount
                                                                                        and $projection.BusinessPartner = _Extension.BusinessPartner

  /* deprecated associations */
  // replaced, because we want to use a more specific association for the incoming payment method 
  association [0..1] to I_CAPaymentMethod             as _PaytMethodIncg                on  $projection.Country = _PaytMethodIncg.Country
                                                                                        and $projection.CAPaymentMethodForIncgPayment = _PaytMethodIncg.CAPaymentMethod
  // incorrect association because CAPaymentMethodForOutgPayment has length five, _PaytMethodOutg.CAPaymentMethod has length one 
  association [0..1] to I_CAPaymentMethod             as _PaytMethodOutg                on  $projection.Country = _PaytMethodOutg.Country
                                                                                        and $projection.CAPaymentMethodForOutgPayment = _PaytMethodOutg.CAPaymentMethod

{
      @ObjectModel.foreignKey.association: '_ContrAcc'
  key vkont                                                               as ContractAccount,
  key gpart                                                               as BusinessPartner,

      vkbez                                                               as ContractAccountName,

      /* administration data */
      @Semantics.systemDate.createdAt: true
      erdat                                                               as CreationDate,
      @Semantics.systemTime.createdAt: true
      ertim                                                               as CreationTime,
      @Semantics.user.createdBy: true
      ernam                                                               as CreatedByUser,
      cast( loevm as loevm preserving type )                              as IsMarkedForDeletion,
      @Semantics.systemDate.lastChangedAt: true
      aedatp                                                              as LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      aetimp                                                              as LastChangeTime,
      @Semantics.user.lastChangedBy: true
      aenamp                                                              as LastChangedByUser,

      /* payment data */
      ebvty                                                               as CABankIDForIncomingPayments,
      abvty                                                               as CABankIDForOutgoingPayments,
      @ObjectModel.foreignKey.association: '_CAIncomingPaymentMethod'
      ezawe                                                               as CAIncomingPaymentMethod,
      azawe                                                               as CACnctntdOutgPaymentMethods,
      @ObjectModel.foreignKey.association: '_CAFirstOutgoingPaymentMethod'
      cast (substring(azawe, 1, 1)  as azawe1_conacct_kk preserving type) as CAFirstOutgoingPaymentMethod,
      @ObjectModel.foreignKey.association: '_CASecondOutgoingPaymentMethod'      
      cast (substring(azawe, 2, 1)  as azawe2_conacct_kk preserving type) as CASecondOutgoingPaymentMethod,
      @ObjectModel.foreignKey.association: '_CAThirdOutgoingPaymentMethod'      
      cast (substring(azawe, 3, 1)  as azawe3_conacct_kk preserving type) as CAThirdOutgoingPaymentMethod,
      @ObjectModel.foreignKey.association: '_CAFourthOutgoingPaymentMethod'      
      cast (substring(azawe, 4, 1)  as azawe4_conacct_kk preserving type) as CAFourthOutgoingPaymentMethod,
      @ObjectModel.foreignKey.association: '_CAFifthOutgoingPaymentMethod'      
      cast (substring(azawe, 5, 1)  as azawe5_conacct_kk preserving type) as CAFifthOutgoingPaymentMethod,
      @ObjectModel.foreignKey.association: '_HouseBankRef'
      eigbv                                                               as CAHouseBankReference,
      ccard_id                                                            as CAPaymentCardIDForIncomingPayt,
      ccard_out                                                           as CAPaymentCardIDForOutgoingPayt,
      mndid                                                               as SEPAMandate,

      /* dunning and collections */
      @ObjectModel.foreignKey.association: '_DunningProcedure'
      mahnv                                                               as CADunningProcedure,
      @ObjectModel.foreignKey.association: '_DunNoticeGroup'
      mgrup                                                               as CADunningNoticeGroup,
      corr_mahnv                                                          as CACorrespondenceDunningProced,
      persr                                                               as CACollectionsClerk,
      @ObjectModel.foreignKey.association: '_CollMasterDataGroup'
      cmgrp                                                               as CACollectionsMasterDataGroup,
      @ObjectModel.foreignKey.association: '_CollectionStrategy'
      strat                                                               as CACollectionStrategy,

      @ObjectModel.foreignKey.association: '_CollContactPerson'
      cpers                                                               as CACollectionsContactPerson,

      /* alternative business partners */
      @ObjectModel.foreignKey.association: '_ContrAcctForPayt'
      vkonv                                                               as ContractAccountForPayment,
      @ObjectModel.foreignKey.association: '_BPForPayment'
      gparv                                                               as CABusinessPartnerForPayment,
      @ObjectModel.foreignKey.association: '_AlternativePayer'
      abwre                                                               as CAAlternativePayer,
      @ObjectModel.foreignKey.association: '_AlternativePayee'
      abwra                                                               as CAAlternativePayee,
      @ObjectModel.foreignKey.association: '_AltvDunningRecipient'
      abwma                                                               as CAAlternativeDunningRecipient,
      @ObjectModel.foreignKey.association: '_AltvInvoiceRecipient'
      abwrh                                                               as CAAlternativeInvoiceRecipient,
      @ObjectModel.foreignKey.association: '_AltvCorrespncRcpnt'
      def_rec                                                             as CAAlternativeCorrespncRcpnt,
      //@ObjectModel.foreignKey.association: '_AddressOfAltvPayer'
      adrre                                                               as CAAddressIDOfAlternativePayer,
      //@ObjectModel.foreignKey.association: '_AddressOfAltvPayee'
      adrra                                                               as CAAddressIDOfAlternativePayee,
      //@ObjectModel.foreignKey.association: '_AddressOfDunRcpnt'
      adrma                                                               as CAAddressIDOfAltvDunRecipient,
      //@ObjectModel.foreignKey.association: '_AddressOFInvcRcpnt'
      adrrh                                                               as CAAddressIDOfAltvInvoiceRcpnt,

      /* direct debit limit */
      @ObjectModel.foreignKey.association: '_CurrencyForDDL'
      ddlcu                                                               as CACurrencyForDirectDebitLimit,
      @Semantics.amount.currencyCode: 'CACurrencyForDirectDebitLimit'
      ddlam                                                               as CADirectDebitLimit,
      ddlnm                                                               as CANmbrMnthsForDirectDebitLimit,
      @ObjectModel.foreignKey.association: '_CADirectDebitLimitCalcMod'
      ddlxg                                                               as CADirectDebitLimitCalcMode,

      /* billing and invoicing */
      inv_cycle_start                                                     as CAStartDateForBillingPeriod,
      inv_chgdisc_x                                                       as ContrAcctPrtnHasInvcgChrgDsc,
      @ObjectModel.foreignKey.association: '_CurrencyForInvoicing'
      inv_curr                                                            as CATargetCurrencyForInvoicing,
      @ObjectModel.foreignKey.association: '_InvcgCategory'
      inv_category                                                        as CAInvcgCategory,
      @ObjectModel.foreignKey.association: '_InvcgSchedule'
      inv_schedule                                                        as CAInvcgSchedule,
      @ObjectModel.foreignKey.association: '_BillgCycle'
      inv_cycle                                                           as CABillgCycle,
      inv_cycle_day                                                       as CALastDayOfBillingPeriod,
      inv_form_det_key                                                    as CADetnCodeForAltvInvoiceForm,
      @ObjectModel.foreignKey.association: '_BPForPosting'
      gpart_inv                                                           as CABusinessPartnerForPosting,
      @ObjectModel.foreignKey.association: '_ContrAcctForPosting'
      vkont_inv                                                           as ContractAccountForPosting,
      @ObjectModel.foreignKey.association: '_BPForInvcgList'
      gpart_invlist                                                       as CABusinessPartnerForInvcgList,
      @ObjectModel.foreignKey.association: '_ContrAcctForInvcgList'
      vkont_invlist                                                       as ContractAccountForInvcgList,
      //@ObjectModel.foreignKey.association: '_MasterAgreement'
      makey                                                               as CAMasterAgreement,
      //@ObjectModel.foreignKey.association: '_PartSettlmtRule'
      ptsrl                                                               as CAPartnerSettlementRule,

      /* tax data */
      qszdt                                                               as ValdtyDateForWhldgTaxExmpCert,
      //@ObjectModel.foreignKey.association: '_TaxJurisdiction'
      txjcd                                                               as TaxJurisdiction,
      qsskz_a                                                             as OutgPaytWithholdingTaxCode,
      qsskz_e                                                             as IncgPaytWithholdingTaxCode,
      qsznr                                                               as WithholdingTaxCertificate,
      //bptaxtype1                                                          as FirstBPTaxType,
      //bptaxtype2                                                          as SecondBPTaxType,

      /* other data */
      fdztg                                                               as CAAdditionalDaysForCashMgmt,
      @ObjectModel.foreignKey.association: '_CABusPrtnPostgLockExstcCode'
      bpl_xpocl                                                           as CABusPartnerPostgLockExstcCode,
      @ObjectModel.foreignKey.association: '_CABusPrtnAddlLockExstcCode'
      bpl_xaddl                                                           as CABusPartnerAddlLockExstcCode,
      bpl_fdate                                                           as CABusinessPartnerLockStartDate,
      bpl_tdate                                                           as CABusinessPartnerLockEndDate,
      exvko                                                               as CABPReferenceNumber,
      @ObjectModel.foreignKey.association: '_CompCodeGroup'
      opbuk                                                               as CACompanyCodeGroup,
      @ObjectModel.foreignKey.association: '_CompCode'
      stdbk                                                               as CAStandardCompanyCode,
      @ObjectModel.foreignKey.association: '_AltvContrAcc'
      abwvk                                                               as AltvContractAcctForCollvBills,
      @ObjectModel.foreignKey.association: '_InterestCode'
      ikey                                                                as CAInterestCode,
      fdgrp                                                               as CashPlanningGroup,
      @ObjectModel.foreignKey.association: '_RelshpOfBP'
      vkpbz                                                               as CARelationshipOfBPToContrAcct,
      //@ObjectModel.foreignKey.association: '_Address'
      adrnb                                                               as AddressID,
      //@ObjectModel.foreignKey.association: '_AddressOfJurisdiction'
      adrjdc                                                              as CAAddressIDOfJurisdictionCode,
      @ObjectModel.foreignKey.association: '_CAAuthorizationGroup'
      begru                                                               as CAAuthorizationGroup,
      @ObjectModel.foreignKey.association: '_ToleranceGroup'
      togru                                                               as CAToleranceGroup,
      @ObjectModel.foreignKey.association: '_CorrespncVar'
      coprc                                                               as CACorrespondenceVariant,
      vbund                                                               as PartnerCompany,
      @ObjectModel.foreignKey.association: '_CACorrespncActivityCode'
      def_rec_ind                                                         as CACorrespondenceActivityCode,
      @ObjectModel.foreignKey.association: '_ClearingCategory'
      vertyp                                                              as CAClearingCategory,
      @ObjectModel.foreignKey.association: '_CADfltClearingRstrcnCode'
      augrs_def                                                           as CADefaultClearingRstrcnCode,
      @ObjectModel.foreignKey.association: '_SupplyingCountry'
      landl                                                               as SupplyingCountry,
      @ObjectModel.foreignKey.association: '_BusinessPlace'      
      bupla                                                               as BusinessPlace,
      @ObjectModel.foreignKey.association: '_CASubledgerApplication'      
      trsla                                                               as CASubledgerApplication,

      /* include SI_FKKVKPSICA  */
      @ObjectModel.foreignKey.association: '_PaymentCondition'
      zahlkond                                                            as PaymentCondition,
      @ObjectModel.foreignKey.association: '_AcctDetnCode'
      kofiz_sd                                                            as CAAccountDeterminationCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                               as BusinessArea,

      // needed for house bank data
      @ObjectModel.foreignKey.association: '_PaymentCompCode'
      _CompCodeGroup.CAPaymentCompanyCode                                 as CAPaymentCompanyCode,
      // needed for payment method data
      @ObjectModel.foreignKey.association: '_Country'
      _CompCodeGroup._CompanyCode.Country                                 as Country,

      // propagation of associations
      _AcctDetnCode,
      _AlternativePayer,
      _AlternativePayee,
      _AltvDunningRecipient,
      _AltvInvoiceRecipient,
      _AltvCorrespncRcpnt,
      _AltvContrAcc,
      _BillgCycle,
      _BPForInvcgList,
      _BPForPayment,
      _BPForPosting,
      _BusinessArea,
      _BusinessPartner,
      _BusinessPlace,
      _CAAuthorizationGroup,
      _CABusPrtnAddlLockExstcCode,
      _CABusPrtnPostgLockExstcCode,
      _CACorrespncActivityCode,      
      _CADfltClearingRstrcnCode,
      _CADirectDebitLimitCalcMod,
      _CAFifthOutgoingPaymentMethod,
      _CAFirstOutgoingPaymentMethod,
      _CAFourthOutgoingPaymentMethod,
      _CAIncomingPaymentMethod,
      _CAPartnerSettlementRule,
      _CASecondOutgoingPaymentMethod,
      _CashPlanningGroup,
      _CASubledgerApplication,
      _CAThirdOutgoingPaymentMethod,
      _ClearingCategory,
      _CollContactPerson,
      _CollectionStrategy,
      _CollMasterDataGroup,
      _CompCode,
      _CompCodeGroup,
      _CollectionsClerk,
      _ContrAcc,
      _ContrAcctForPayt,
      _ContrAcctForInvcgList,
      _ContrAcctForPosting,
      _CorrespncVar,
      _Country,
      _CurrencyForDDL,
      _CurrencyForInvoicing,
      _DunningProcedure,
      _CorrespncDunningProcedure,
      _DunNoticeGroup,
      _HouseBankRef,
      _InvcgCategory,
      _InvcgSchedule,
      _InterestCode,
      _MasterAgreement,
      _PartnerCompany,
      _PaymentCompCode,
      _PaymentCondition,
      _RelshpOfBP,
      _SupplyingCountry,
      _ToleranceGroup,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CABusPartnerPostgLockExstcCode'
      bpl_xpocl                                                           as CABusinessPartnerLock,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CADefaultClearingRstrcnCode'
      augrs_def                                                           as CAClearingRestriction,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CAIncomingPaymentMethod'
      @ObjectModel.foreignKey.association: '_PaytMethodIncg'
      ezawe                                                               as CAPaymentMethodForIncgPayment,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CACnctntdOutgPaymentMethods'
      @ObjectModel.foreignKey.association: '_PaytMethodOutg'
      azawe                                                               as CAPaymentMethodForOutgPayment,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'OutgPaytWithholdingTaxCode' 
      qsskz_a                                                             as CAWhldgTaxCodeOutgoingPayt,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'IncgPaytWithholdingTaxCode' 
      qsskz_e                                                             as CAWhldgTaxCodeIncomingPayt,

      /* deprecated associations */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CorrespncVar'
      _CorrespncVar                                                       as _CorrVariant,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAIncomingPaymentMethod'
      _PaytMethodIncg,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAFirstOutgoingPaymentMethod'
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _PaytMethodOutg
      
}
```
