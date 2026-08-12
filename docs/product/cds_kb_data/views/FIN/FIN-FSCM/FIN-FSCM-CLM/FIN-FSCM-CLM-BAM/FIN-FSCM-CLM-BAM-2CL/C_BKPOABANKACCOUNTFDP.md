---
name: C_BKPOABANKACCOUNTFDP
description: "This CDS view is used during the creation of a PDF for powers of attorney and provides the bank accounts assigned to a power of attorney, including some basic information about the bank accounts, as well as the timestamps of the assignment and removal of a bank account to the power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOABANKACCOUNTFDP')/$value
semantic_en: "This CDS view is used during the creation of a PDF for powers of attorney and provides the bank accounts assigned to a power of attorney, including some basic information about the bank accounts, as well as the timestamps of the assignment and removal of a bank account to the power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Form Data Provider for POA Bank Account — CDS view tiêu dùng dựa trên I_BkPOABankAccount."
keywords:
  - "form"
  - "data"
  - "provider"
  - "for"
  - "poa"
  - "bank"
  - "account"
  - "power"
  - "attorney"
  - "authorization"
  - "group"
  - "internal"
  - "acct"
  - "assignment"
  - "date"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
---
# C_BKPOABANKACCOUNTFDP

**This CDS view is used during the creation of a PDF for powers of attorney and provides the bank accounts assigned to a power of attorney, including some basic information about the bank accounts, as well as the timestamps of the assignment and removal of a bank account to the power of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOABANKACCOUNTFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BkPOABankAccountUUID` | ✓ | |  |  | `RAW(16)` | UUID of Bank Account in POA for Banking Transactions |
| `BkPOAAuthorizationGroup` |  | | `_BankPowerOfAttorney` | `BkPOAAuthorizationGroup` | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BkPOABkAcctAssignmentDateTime` |  | |  |  | `DEC(15)` | Bank Account Assignment Timestamp |
| `BkPOABkAcctRemovalDateTime` |  | |  |  | `DEC(15)` | Bank Account Removal Timestamp |
| `BankAccountNumber` |  | | `_BankAccountBasicData` | `BankAccountNumber` | `CHAR(40)` | Bank Account Number |
| `Bank` |  | | `_BankAccountBasicData` | `Bank` | `CHAR(15)` | Bank Key |
| `BankAccountCurrency` |  | | `_BankAccountBasicData` | `BankAccountCurrency` | `CUKY(5)` | Currency Key |
| `BankCountry` |  | |  | `cast (_BankAccountBasicData.BankCountry as fclm_poa_bank_country_key preserving type)` | `CHAR(3)` | Bank Country/Region Key |
| `BankCountryName` |  | |  | `_BankAccountBasicData._BankCountry._Text[1:Language = $session.system_language].CountryName` | `CHAR(50)` | Country/Region Name |
| `BankControlKey` |  | | `_BankAccountBasicData` | `BankControlKey` | `CHAR(2)` | Bank Control Key |
| `BankAccountContractType` |  | | `_BankAccountBasicData` | `BankAccountContractType` | `CHAR(2)` | Bank Account Contract Type |
| `BankAccountContractTypeName` |  | | `_BankAccountBasicData._ContractType` | `BankAccountContractTypeName` | `CHAR(60)` | Bank Account Contract Type Description |
| `BankAccountType` |  | | `_BankAccountBasicData` | `BankAccountType` | `CHAR(10)` | Bank Account Type ID |
| `CompanyCode` |  | | `_BankAccountBasicData` | `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | | `_BankAccountBasicData._CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `BankName` |  | | `_BankAccount._Bank` | `BankName` | `CHAR(60)` | Name of Financial Institution |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOABANKACCOUNTFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOABANKACCOUNTFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Form Data Provider for POA Bank Account'
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #CONSUMPTION }
@ObjectModel.usageType:{ serviceQuality: #C,
                         sizeCategory: #M,
                         dataClass: #MASTER }
@ObjectModel.modelingPattern:           #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_FORM_DATA_PROVIDER   ]
define view entity C_BkPOABankAccountFDP
  as select from I_BkPOABankAccount
{
  key BankPowerOfAttorneyUUID,
  key BkPOABankAccountUUID,
      // for DCL
      _BankPowerOfAttorney.BkPOAAuthorizationGroup,
      BankAccountInternalID,
      BkPOABkAcctAssignmentDateTime,
      BkPOABkAcctRemovalDateTime,
      _BankAccountBasicData.BankAccountNumber,
      _BankAccountBasicData.Bank,
      _BankAccountBasicData.BankAccountCurrency,
      _BankAccountText[1:Language = $session.system_language].BankAccountDescription,
      cast (_BankAccountBasicData.BankCountry as fclm_poa_bank_country_key preserving type)       as BankCountry,
      _BankAccountBasicData._BankCountry._Text[1:Language = $session.system_language].CountryName as BankCountryName,
      _BankAccountBasicData.BankControlKey,
      _BankAccountBasicData.BankAccountContractType,
      _BankAccountBasicData._ContractType.BankAccountContractTypeName,
      _BankAccountBasicData.BankAccountType,
      _BankAccountBasicData._BankAccountType[1:Language = $session.system_language].BankAccountTypeText,
      _BankAccountBasicData.CompanyCode,
      _BankAccountBasicData._CompanyCode.CompanyCodeName,
      _BankAccount._Bank.BankName

}
where
  _BankPowerOfAttorney.BankPowerOfAttorneyIsBlocked <> 'X'
```
