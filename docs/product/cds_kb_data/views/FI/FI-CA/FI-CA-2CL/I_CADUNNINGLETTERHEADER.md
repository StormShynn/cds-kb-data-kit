---
name: I_CADUNNINGLETTERHEADER
description: "This CDS view represents the header information of a dunning notice. This CDS view provides the data to answer the following business question: What correspondence header information is required during dunning letter printing? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. Example By using this CDS view together with BAdI FKK_CORR_DET_FORM_TEMPLATE, you can override the correspondence templates, either form templates or email templates, that are defined in the standard SAP configuration."
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGLETTERHEADER')/$value
semantic_en: "This CDS view represents the header information of a dunning notice. This CDS view provides the data to answer the following business question: What correspondence header information is required during dunning letter printing? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. Example By using this CDS view together with BAdI FKK_CORR_DET_FORM_TEMPLATE, you can override the correspondence templates, either form templates or email templates, that are defined in the standard SAP configuration."
semantic_vi: "Mahnschreiben - Kopfdaten — CDS view giao diện dựa trên I_CADunningHeader."
keywords:
  - "Dunning Letter - Header Data"
  - "mahnschreiben"
  - "kopfdaten"
  - "mass"
  - "date"
  - "business"
  - "partner"
  - "contract"
  - "account"
  - "dunning"
  - "counter"
tags:
  - FI
  - bo:companycode
  - component:FI-CA-2CL
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
---
# I_CADUNNINGLETTERHEADER

**This CDS view represents the header information of a dunning notice. This CDS view provides the data to answer the following business question: What correspondence header information is required during dunning letter printing? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. Example By using this CDS view together with BAdI FKK_CORR_DET_FORM_TEMPLATE, you can override the correspondence templates, either form templates or email templates, that are defined in the standard SAP configuration.**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGLETTERHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAMassRunDate` | ✓ | |  |  | `DATS(8)` | Date ID |
| `CAMassRunID` | ✓ | |  |  | `CHAR(6)` | Additional Identification Characteristic |
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `ContractAccount` | ✓ | |  |  | `CHAR(12)` | Contract Account Number |
| `CADunningCounter` | ✓ | |  |  | `NUMC(6)` | Counter for Several Dunning Notices to a Business Partner |
| `ContractAccountName` |  | |  | `case when Dunning.ContractAccount is initial then Dunning._CAHeaderLeading.ContractAccountName else Dunning._CAHeader.ContractAccountName end` | `CHAR(35)` | Contract Account Name |
| `CAContract` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `CALeadingContractAccount` |  | |  |  | `CHAR(12)` | Leading Contract Account in Dunning |
| `CADunningChargeAmount` |  | |  | `( Dunning.CAAmountForDunningCharge1 + Dunning.CAAmountForDunningCharge2 + Dunning.CAAmountForDunningCharge3 )` | `CURR(15)` |  |
| `CADunningInterestAmount` |  | |  |  | `CURR(13)` | Dunning interest in transaction currency |
| `CADunningBalance` |  | |  |  | `CURR(13)` | Dunning Balance |
| `CAPaymentTargetDate` |  | |  |  | `DATS(8)` | Payment Target in Dunning Notice |
| `CorrespondenceIssueDate` |  | |  |  | `DATS(8)` | Issue Date |
| `Currency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Correspondence |
| `CACorrespondenceType` |  | |  |  | `CHAR(4)` | Correspondence Type |
| `CACorrespondence` |  | |  |  | `CHAR(36)` | Correspondence Key |
| `OriglCorrespondenceRecipient` |  | |  |  | `CHAR(10)` | Original Correspondence Recipient |
| `CADunningProcedure` |  | |  |  | `CHAR(2)` | Dunning Procedure |
| `CADunningLevel` |  | |  |  | `NUMC(2)` | Dunning Level |
| `CACollectionStrategy` |  | |  |  | `CHAR(2)` | Collection Strategy |
| `CACollectionStep` |  | |  |  | `CHAR(4)` | Collection Step |
| `CAPaymentFormNumber` |  | |  |  | `CHAR(12)` | Payment Form Number |
| `CAPaymentFormExternalNumber` |  | |  |  | `CHAR(30)` | External key payment form |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_Extension` | `E_ContractAccountingDunning` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGLETTERHEADER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGLETTERHEADER')/$value)*

```abap
@EndUserText.label: 'Mahnschreiben - Kopfdaten'
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'ICADUNLTRHEAD'
define view I_CADunningLetterHeader 
with parameters 
@Consumption.hidden: true
@Environment.systemField: #SYSTEM_LANGUAGE
P_Language:sylangu
as select from I_CADunningHeader        as Dunning
          join I_CACorrespondenceHeader as Correspndc
           on  Dunning.CAMassRunDate           = Correspndc.CAMassRunDate
           and Dunning.CAMassRunID             = Correspndc.CAMassRunID
           and Dunning.BusinessPartner         = Correspndc.OriglCorrespondenceRecipient
           and ( Dunning.ContractAccount          = Correspndc.ContractAccount or
                 Dunning.CALeadingContractAccount = Correspndc.ContractAccount )          
           and Dunning.CADunningCounter        = Correspndc.Correspondence1stEntityData
           and Correspndc.CACorrespondenceType = '0003'
  association [1..1] to I_BusinessPartner        as _BusinessPartner on $projection.BusinessPartner  = _BusinessPartner.BusinessPartner      
  // Key User Extensibility. Is registerd in transaction SCFD_REGISTRY. Do not change E_ContractAccountingDunning or alias _Extension without adopting CFD regestry entry  
  association [1..1] to E_ContractAccountingDunning  as _Extension  on $projection.CAMassRunDate     = _Extension.CAMassRunDate
                                                                    and $projection.CAMassRunID      = _Extension.CAMassRunID
                                                                    and $projection.BusinessPartner  = _Extension.BusinessPartner
                                                                    and $projection.ContractAccount  = _Extension.ContractAccount     
                                                                    and $projection.CADunningCounter = _Extension.CADunningCounter  
{
  key Dunning.CAMassRunDate,
  key Dunning.CAMassRunID,
  key Dunning.BusinessPartner,
  key Dunning.ContractAccount,
  key Dunning.CADunningCounter,

      case when Dunning.ContractAccount is initial
        then 
          Dunning._CAHeaderLeading.ContractAccountName
        else
          Dunning._CAHeader.ContractAccountName
        end as ContractAccountName,
      Dunning.CAContract,
      Dunning.CALeadingContractAccount,     
      @Semantics.amount.currencyCode: 'Currency'
      ( Dunning.CAAmountForDunningCharge1 + Dunning.CAAmountForDunningCharge2 + Dunning.CAAmountForDunningCharge3 ) as CADunningChargeAmount,
      @Semantics.amount.currencyCode: 'Currency'
      Dunning.CADunningInterestAmount,
      @Semantics.amount.currencyCode: 'Currency'      
      Dunning.CADunningBalance,
      Dunning.CAPaymentTargetDate,
      Correspndc.CorrespondenceIssueDate,
      Correspndc.Currency,
      Correspndc.CompanyCode,
      Correspndc.CACorrespondenceType,
      Correspndc.CACorrespondence,
      Correspndc.OriglCorrespondenceRecipient,
      
      Dunning.CADunningProcedure,
      Dunning.CADunningLevel,
      Dunning.CACollectionStrategy,
      Dunning.CACollectionStep,
      Dunning._DunningProcedure._Text[1:Language = :P_Language].CADunningProcedureName,
      Dunning._DunningLevel._Text[1:Language = :P_Language].CADunningLevelName,
      Dunning._CollectionStrategy._Text[1:Language = :P_Language].CACollectionStrategyName,
      Dunning._CollectionStep._Text[1:Language = :P_Language].CACollectionStepName,
      
      Dunning.CAPaymentFormNumber,
      Dunning.CAPaymentFormExternalNumber,
      
      _BusinessPartner      
}
where Dunning.CADunningActivityRunDate > '00000000'
  and Dunning.CADunningNoticeIsReversed = ' '
  and Dunning.CADunningNoticeIsInfoOnly = ' '
```
