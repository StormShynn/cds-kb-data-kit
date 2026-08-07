---
name: I_REVENUEACCOUNTINGCONTRACT
description: Revenueaccountingcontract
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - contract
  - component:FI-RA-2CL
  - lob:Finance
---
# I_REVENUEACCOUNTINGCONTRACT

**Revenueaccountingcontract**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RevenueAccountingContract` | ✓ | |  | `cast(contract_id as farr_cds_contract_id preserving type)` |  |  |
| `CompanyCode` |  | |  | `company_code` |  |  |
| `RevnAcctgContractDescription` |  | |  | `description` |  |  |
| `TotContractualPrcInSlsDocCrcy` |  | |  | `cast(trx_price as farr_cds_contractual_price preserving type)` |  |  |
| `RevnAcctgContractCategory` |  | |  | `contract_cat` |  |  |
| `RevnAcctgSalesOrganization` |  | |  | `sales_org` |  |  |
| `AllocEffctAmountInSalesDocCrcy` |  | |  | `cast(alloc_differ as farr_corr_amt preserving type)` |  |  |
| `AccountingPrinciple` |  | |  | `acct_principle` |  |  |
| `NumberOfPerformanceObligations` |  | |  | `cast(num_of_pob as farr_cds_num_of_pobs preserving type)` |  |  |
| `SalesDocumentCurrency` |  | |  | `cast(trx_price_curk as waerk preserving type)` |  |  |
| `BusinessPartner` |  | |  | `partner` |  |  |
| `Customer` |  | |  | `customer_id` |  |  |
| `CustomerGroup` |  | |  | `customer_grp` |  |  |
| `RAContractHasAllocationEffect` |  | |  | `cast(price_adjusted as farr_cds_has_alloc_effect preserving type)` |  |  |
| `RAContrBalanceDerivationRule` |  | |  | `liab_method` |  |  |
| `RAPostLevelOfContractBalance` |  | |  | `liability_post_mode` |  |  |
| `RevnAcctgContractStatus` |  | |  | `status` |  |  |
| `RAContractCompletionDate` |  | |  | `cast(completion_date as farr_cds_contr_completion_date preserving type)` |  |  |
| `RevnContrAssetsImpairmentDate` |  | |  | `cast(asset_impairment_date as farr_cds_asset_impairment_date preserving type)` |  |  |
| `RAContractHasAssetsImpairment` |  | |  | `cast(case asset_impairment_date when '00000000' then ' ' else 'X' end as farr_cds_has_impair_of_assets preserving type)` |  |  |
| `RevnAcctgContractCreatedByUser` |  | |  | `cast(created_by as fis_cc_erfnm preserving type)` |  |  |
| `RevnAcctgContractCreationDate` |  | |  | `cast(created_on as farr_cds_created_on preserving type)` |  |  |
| `RAContractLastChangedByUsr` |  | |  | `cast(last_changed_by as fis_aufaenam preserving type)` |  |  |
| `RAContractIsSoftDeleted` |  | |  | `soft_deleted` |  |  |
| `RAContractLastChangeDate` |  | |  | `last_changed_on` |  |  |
| `RAContractLastSavedDateTime` |  | |  | `last_saved_on` |  |  |
| `RAContractReceivableAdjmtAcct` |  | |  | `recei_adj_account` |  |  |
| `RAContractAssetAccount` |  | |  | `asset_account` |  |  |
| `RAContractLiabilityAccount` |  | |  | `liability_account` |  |  |
| `RAContractIsManuallyChanged` |  | |  | `manual_changed` |  |  |
| `RAContractIsManuallyAllocated` |  | |  | `cast(manual_allocated as farr_cds_manual_price_alloc preserving type)` |  |  |
| `RAContrHasMnlPrcAllocConflict` |  | |  | `cast(manual_price_alloc_conflict as farr_cds_has_alloc_conflict preserving type)` |  |  |
| `FinancialValuationObjectType` |  | |  | `cast('RARC' as val_obj_type preserving type)` |  |  |
| `FinancialValuationObject` |  | |  | `cast(contract_id as val_obj_id)` |  |  |
| `FinancialValuationSubobject` |  | |  | `cast(' ' as val_subobj_id preserving type)` |  |  |
| `RAContractIsCreatedByContrMgr` |  | |  | `rar_version_code` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `is_blocked` |  |  |
| `RAContractTransformRecnclnKey` |  | |  | `ccm_ocm_recon_key` |  |  |
| `RAContractPostingMode` |  | |  | `posting_mode` |  |  |
| `RAContractIsUniversal` |  | |  | `universal_rev_contr` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |
| `_RAContractCategory` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_BalanceDerivationRule` | | ✓ | | | | |
| `_PostLevel` | | ✓ | | | | |
| `_RAContractStatus` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_SAPObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [1..1] |
| `_RAContractCategory` | `I_RAContractCategory` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_BalanceDerivationRule` | `I_RAContrBalanceDerivationRule` | [0..1] |
| `_PostLevel` | `I_RAPostLevelOfContractBalance` | [0..1] |
| `_RAContractStatus` | `I_RAContractStatus` | [1..1] |
| `_CreatedByUser` | `I_User` | [1..1] |
| `_ChangedByUser` | `I_User` | [1..1] |
| `_SAPObjectType` | `I_SAPObjectType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations:  [ '_CreatedByUser', '_ChangedByUser' ]

@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IRACONTRACT'

@EndUserText.label: 'Revenue Accounting Contract'

@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true //C1 release shall be annotated with this

@ObjectModel.representativeKey: 'RevenueAccountingContract'
@ObjectModel.semanticKey: ['RevenueAccountingContract']
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #XXL, dataClass: #TRANSACTIONAL}

@VDM.viewType: #BASIC

define view entity I_RevenueAccountingContract
  as select from farr_d_contract

  association [0..1] to I_BusinessPartner              as _BusinessPartner       on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_Customer                     as _Customer              on $projection.Customer = _Customer.Customer
  association [0..1] to I_CustomerGroup                as _CustomerGroup         on $projection.CustomerGroup = _CustomerGroup.CustomerGroup
  association [1..1] to I_CompanyCode                  as _CompanyCode           on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_AccountingPrinciple          as _AccountingPrinciple   on $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple
  association [1..1] to I_RAContractCategory           as _RAContractCategory    on $projection.RevnAcctgContractCategory = _RAContractCategory.RevnAcctgContractCategory
  association [0..1] to I_Currency                     as _Currency              on $projection.SalesDocumentCurrency = _Currency.Currency
  association [0..1] to I_SalesOrganization            as _SalesOrganization     on $projection.RevnAcctgSalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_RAContrBalanceDerivationRule as _BalanceDerivationRule on $projection.RAContrBalanceDerivationRule = _BalanceDerivationRule.RAContrBalanceDerivationRule
  association [0..1] to I_RAPostLevelOfContractBalance as _PostLevel             on $projection.RAPostLevelOfContractBalance = _PostLevel.RAPostLevelOfContractBalance
  association [1..1] to I_RAContractStatus             as _RAContractStatus      on $projection.RevnAcctgContractStatus = _RAContractStatus.RevnAcctgContractStatus
  association [1..1] to I_User                         as _CreatedByUser         on $projection.RevnAcctgContractCreatedByUser = _CreatedByUser.UserID
  association [1..1] to I_User                         as _ChangedByUser         on $projection.RAContractLastChangedByUsr = _ChangedByUser.UserID
  association [1..1] to I_SAPObjectType                as _SAPObjectType         on $projection.RevenueAccountingContract = _SAPObjectType.SAPObjectType

{
  key cast(contract_id as farr_cds_contract_id preserving type)                        as RevenueAccountingContract,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      company_code                                                                     as CompanyCode,

      description                                                                      as RevnAcctgContractDescription,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(trx_price as farr_cds_contractual_price preserving type)                    as TotContractualPrcInSlsDocCrcy,

      @ObjectModel.foreignKey.association: '_RAContractCategory'
      contract_cat                                                                     as RevnAcctgContractCategory,

      sales_org                                                                        as RevnAcctgSalesOrganization,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(alloc_differ as farr_corr_amt preserving type)                              as AllocEffctAmountInSalesDocCrcy,

      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
      acct_principle                                                                   as AccountingPrinciple,

      cast(num_of_pob as farr_cds_num_of_pobs preserving type)                         as NumberOfPerformanceObligations,

      cast(trx_price_curk as waerk preserving type)                                    as SalesDocumentCurrency,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      partner                                                                          as BusinessPartner,

      @ObjectModel.foreignKey.association: '_Customer'
      customer_id                                                                      as Customer,

      customer_grp                                                                     as CustomerGroup,

      cast(price_adjusted  as farr_cds_has_alloc_effect preserving type)               as RAContractHasAllocationEffect,

      @ObjectModel.foreignKey.association: '_BalanceDerivationRule'
      liab_method                                                                      as RAContrBalanceDerivationRule,

      @ObjectModel.foreignKey.association: '_PostLevel'
      liability_post_mode                                                              as RAPostLevelOfContractBalance,

      @ObjectModel.foreignKey.association: '_RAContractStatus'
      status                                                                           as RevnAcctgContractStatus,

      cast(completion_date as farr_cds_contr_completion_date preserving type)          as RAContractCompletionDate,

      cast(asset_impairment_date as farr_cds_asset_impairment_date preserving type)    as RevnContrAssetsImpairmentDate,

      cast(case asset_impairment_date
             when '00000000' then ' '
             else 'X'
           end as farr_cds_has_impair_of_assets preserving type)                       as RAContractHasAssetsImpairment,

      @Semantics.user.createdBy: true
      // @ObjectModel.foreignKey.association: '_CreatedByUser' //C1 released view cannot use ForeignKey Association of View without Representative key
      cast(created_by as fis_cc_erfnm preserving type)                                 as RevnAcctgContractCreatedByUser,

      @Semantics.systemDate.createdAt: true
      cast(created_on as farr_cds_created_on preserving type)                          as RevnAcctgContractCreationDate,

      @Semantics.user.lastChangedBy: true
      // @ObjectModel.foreignKey.association: '_ChangedByUser'
      cast(last_changed_by as fis_aufaenam preserving type)                            as RAContractLastChangedByUsr,

      soft_deleted                                                                     as RAContractIsSoftDeleted,

      @Semantics.systemDate.lastChangedAt: true
      last_changed_on                                                                  as RAContractLastChangeDate,

      last_saved_on                                                                    as RAContractLastSavedDateTime,

      recei_adj_account                                                                as RAContractReceivableAdjmtAcct,

      asset_account                                                                    as RAContractAssetAccount,

      liability_account                                                                as RAContractLiabilityAccount,

      manual_changed                                                                   as RAContractIsManuallyChanged,

      cast(manual_allocated as farr_cds_manual_price_alloc preserving type)            as RAContractIsManuallyAllocated,

      cast(manual_price_alloc_conflict as farr_cds_has_alloc_conflict preserving type) as RAContrHasMnlPrcAllocConflict,

      cast('RARC' as val_obj_type preserving type)                                     as FinancialValuationObjectType,
      cast(contract_id as val_obj_id)                                                  as FinancialValuationObject,
      cast('                                ' as val_subobj_id preserving type)        as FinancialValuationSubobject,

      @API.element.releaseState: #DEPRECATED
      rar_version_code                                                                 as RAContractIsCreatedByContrMgr,

      is_blocked                                                                       as IsBusinessPurposeCompleted,

      ccm_ocm_recon_key                                                                as RAContractTransformRecnclnKey,

      posting_mode                                                                     as RAContractPostingMode,

      universal_rev_contr                                                              as RAContractIsUniversal,

      /* Association */
      _BusinessPartner,
      _Customer,
      _CustomerGroup,
      _CompanyCode,
      _AccountingPrinciple,
      _RAContractCategory,
      _Currency,
      _SalesOrganization,
      _BalanceDerivationRule,
      _PostLevel,
      _RAContractStatus,
      _CreatedByUser,
      _ChangedByUser,
      _SAPObjectType
}
```
