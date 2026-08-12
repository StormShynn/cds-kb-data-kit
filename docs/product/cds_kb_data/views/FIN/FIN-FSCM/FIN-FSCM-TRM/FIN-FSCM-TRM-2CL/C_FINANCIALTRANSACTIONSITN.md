---
name: C_FINANCIALTRANSACTIONSITN
description: "This CDS view is required for situation handling for financial transactions for Treasury and Risk Management. This way, business users can be notified if financial transactions enter a specific status that requires further action. For example, if a foreign exchange option (product type 76A) expires today and needs to be exercised, a notification will be sent. Several channels are available, such as the notification area on the SAP Fiori launchpad or e-mail. This CDS view provides the following information: Pro-actively informs users about issues requiring their attention Provides data required for informed decisions Proposes actions to solve the situation Track actions and analyze situations from alert to solution Collect situation-related data for advanced analytics To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALTRANSACTIONSITN')/$value
semantic_en: "This CDS view is required for situation handling for financial transactions for Treasury and Risk Management. This way, business users can be notified if financial transactions enter a specific status that requires further action. For example, if a foreign exchange option (product type 76A) expires today and needs to be exercised, a notification will be sent. Several channels are available, such as the notification area on the SAP Fiori launchpad or e-mail. This CDS view provides the following information: Pro-actively informs users about issues requiring their attention Provides data required for informed decisions Proposes actions to solve the situation Track actions and analyze situations from alert to solution Collect situation-related data for advanced analytics To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Situation for Financial Transactions — CDS view tiêu dùng dựa trên I_FinancialTransactionManage."
keywords:
  - "situation"
  - "for"
  - "financial"
  - "transactions"
  - "trans"
  - "company"
  - "code"
  - "transaction"
  - "letter"
  - "credit"
  - "bank"
  - "guarantee"
  - "number"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - notification
  - product
  - transaction
---
# C_FINANCIALTRANSACTIONSITN

**This CDS view is required for situation handling for financial transactions for Treasury and Risk Management. This way, business users can be notified if financial transactions enter a specific status that requires further action. For example, if a foreign exchange option (product type 76A) expires today and needs to be exercised, a notification will be sent. Several channels are available, such as the notification area on the SAP Fiori launchpad or e-mail. This CDS view provides the following information: Pro-actively informs users about issues requiring their attention Provides data required for informed decisions Proposes actions to solve the situation Track actions and analyze situations from alert to solution Collect situation-related data for advanced analytics To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALTRANSACTIONSITN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinTransWithCompanyCode` | ✓ | |  |  | `CHAR(18)` | Financial Transaction Number With Company Code |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  | `cast( LTRIM( FinancialTransaction, '0' ) as tb_rfha )` | `CHAR(13)` | Financial Transaction |
| `LetterOfCredit` |  | |  |  | `CHAR(16)` | Letter of Credit Number |
| `BankGuaranteeNumber` |  | |  |  | `CHAR(16)` | Bank Guarantee Number |
| `Counterparty` |  | |  | `cast( LTRIM( Counterparty, '0' ) as rkontrah_new )` | `CHAR(10)` | Counterparty Number |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Instrument Transaction Type |
| `FinTransActyConclusionDate` |  | |  |  | `DATS(8)` | Conclusion Date of a Financial Transaction Activity |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `TermStartDate` |  | |  |  | `DATS(8)` | Term Start |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `FinTransGenActivityCategory` |  | |  |  | `NUMC(3)` | General Activity Category |
| `FinancialInstrActivityCategory` |  | |  |  | `NUMC(2)` | Transaction Activity Category |
| `FinTransCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `TreasuryAdvisingBank` |  | |  | `cast( LTRIM( TreasuryAdvisingBank, '0' ) as ftr_advising_bank )` | `CHAR(10)` | Advising Bank |
| `TreasuryApplicant` |  | |  | `cast( LTRIM( TreasuryApplicant, '0' ) as ftr_applicant )` | `CHAR(10)` | Applicant |
| `BankGuaranteeType` |  | |  |  | `CHAR(4)` | Bank Guarantee Type |
| `TreasuryBeneficiary` |  | |  | `cast( LTRIM( TreasuryBeneficiary, '0' ) as ftr_beneficiary )` | `CHAR(10)` | Beneficiary |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `CurrencyPair` |  | |  |  | `CHAR(20)` | Currency Pair |
| `FinTransExerciseDate` |  | |  |  | `DATS(8)` | Exercise Date |
| `OptionExpirationDate` |  | |  |  | `DATS(8)` | Expiration Date |
| `FinTransFixingDate` |  | |  |  | `DATS(8)` | Fixing Date |
| `TreasuryIssuingBank` |  | |  | `cast( LTRIM( TreasuryIssuingBank, '0' ) as ftr_issue_bank )` | `CHAR(10)` | Issuing Bank |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Flow Payment Date |
| `FinTransPositionValueDate` |  | |  |  | `DATS(8)` | Position Value Date |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Financial Instrument Product Category |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Security Account |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class |
| `ForeignExchangeValueDate` |  | |  |  | `DATS(8)` | Foreign Exchange Value Date |
| `FinTransPremiumPaymentDate` |  | |  |  | `DATS(8)` | Premium Payment Date |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALTRANSACTIONSITN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALTRANSACTIONSITN')/$value)*

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'CFINTRANSSITN'
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Situation for Financial Transactions'
@ObjectModel:{  usageType: {
                  sizeCategory: #XL,
                  serviceQuality: #D,
                  dataClass: #MIXED
                },
                semanticKey: [ 'CompanyCode','FinancialTransaction' ],
                modelingPattern: #SITUATION_TRIGGER,
                supportedCapabilities: [ #SITUATION_ANCHOR, #SITUATION_TRIGGER ]
             }

define view C_FinancialTransactionSitn
  as select from I_FinancialTransactionManage ( P_KeyDate: $session.system_date )
{
      @UI.hidden: true
  key FinTransWithCompanyCode,
      @Consumption.valueHelpDefinition: [{ entity: {
                                                      name :    'I_CompanyCodeStdVH',
                                                      element:  'CompanyCode'
                                                   }
      }]
      CompanyCode,
      @Consumption.hidden:true
      cast( LTRIM( FinancialTransaction, '0' ) as tb_rfha ) as FinancialTransaction,
      @Consumption.hidden:true
      LetterOfCredit,
      @Consumption.hidden:true
      BankGuaranteeNumber,
      @Consumption.valueHelpDefinition: [{entity :{
                                                      name:     'I_FinTransacCounterPartyStdVH',
                                                      element:  'BusinessPartner'
                                                  }
      }]
      cast( LTRIM( Counterparty, '0' ) as rkontrah_new ) as Counterparty,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:     'I_FinancialinstrProductType',
                                                      element:  'FinancialInstrumentProductType'
                                                  }
      }]
      FinancialInstrumentProductType,
      FinancialInstrTransactionType,
      FinTransActyConclusionDate,
      TermEndDate,
      TermStartDate,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:     'I_CurrencyStdVH',
                                                      element:  'Currency'
                                                  }
      }]
      TransactionCurrency,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:     'I_FinTransGenActyCategory',
                                                      element:  'FinTransGenActivityCategory'
                                                  }
      }]
      FinTransGenActivityCategory,
      FinancialInstrActivityCategory,
      FinTransCreationDate,
      LastChangeDate,
      Portfolio,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:     'I_BankGroup',
                                                      element:  'BusinessPartner'
                                                  }
      }]
      cast( LTRIM( TreasuryAdvisingBank, '0' ) as ftr_advising_bank ) as TreasuryAdvisingBank,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:     'I_BusinessPartnerVH',
                                                      element:  'BusinessPartner'
                                                  }
      }]
      cast( LTRIM( TreasuryApplicant, '0' ) as ftr_applicant ) as TreasuryApplicant,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:     'I_BankGuaranteeType',
                                                      element:  'BankGuaranteeType'
                                                  }
      }]
      BankGuaranteeType,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:     'I_BusinessPartnerVH',
                                                      element:  'BusinessPartner'
                                                  }
      }]
      cast( LTRIM( TreasuryBeneficiary, '0' ) as ftr_beneficiary ) as TreasuryBeneficiary,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:      'I_TreasuryContractType',
                                                      element:   'TreasuryContractType'
                                                  }
      }]
      TreasuryContractType,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:      'I_FinTransCurrencyPairVH',
                                                      element:   'CurrencyPair'
                                                  }
      }]
      CurrencyPair,
      FinTransExerciseDate,
      OptionExpirationDate,
      FinTransFixingDate,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:     'I_BankGroup',
                                                      element:  'BusinessPartner'
                                                  }
      }]
      cast( LTRIM( TreasuryIssuingBank, '0' ) as ftr_issue_bank ) as TreasuryIssuingBank,
      FinTransFlowPaymentDate,
      FinTransPositionValueDate,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:      'I_FinancialInstrProdCat',
                                                      element:   'FinancialInstrProductCategory'
                                                   }
      }]
      FinancialInstrProductCategory,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:     'I_SecurityAccount',
                                                      element:  'SecurityAccount'
                                                  }
      }]
      SecurityAccount,
      @Consumption.valueHelpDefinition: [{entity: {
                                                      name:     'I_SecurityClass',
                                                      element:  'SecurityClass'
                                                  }
      }]
      SecurityClass,
      ForeignExchangeValueDate,
      FinTransPremiumPaymentDate
}
```
