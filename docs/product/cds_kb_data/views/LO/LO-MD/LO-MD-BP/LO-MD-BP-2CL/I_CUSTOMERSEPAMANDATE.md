---
name: I_CUSTOMERSEPAMANDATE
description: "Customersepamandate"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_CUSTOMERSEPAMANDATE

**Customersepamandate**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  | `SEPAMandateSender` |  |  |
| `SEPAMandate` | ✓ | |  |  |  |  |
| `SEPAMandateSenderIBAN` | ✓ | |  |  |  |  |
| `SEPAMandateVersion` | ✓ | |  |  |  |  |
| `SEPAMandateSenderBankSWIFTCode` |  | |  |  |  |  |
| `SEPAMandateUUID` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `SEPAPaymentType` |  | |  |  |  |  |
| `SEPAMandateStatus` |  | |  |  |  |  |
| `SEPAMandateIsB2BMandate` |  | |  |  |  |  |
| `OriginalSEPAMandateCreditor` |  | |  |  |  |  |
| `OriginalSEPAMandate` |  | |  |  |  |  |
| `SEPAMandateApplication` |  | |  |  |  |  |
| `SEPAMandateReferenceType` |  | |  |  |  |  |
| `SEPAMandateReference` |  | |  |  |  |  |
| `SEPAMandateSenderType` |  | |  |  |  |  |
| `SEPAMandateRecipientType` |  | |  |  |  |  |
| `SEPAMandateRecipient` |  | |  |  |  |  |
| `SEPAMandateCreditor` |  | |  |  |  |  |
| `SEPAMandateFirstUseDate` |  | |  |  |  |  |
| `SEPAMandateFirstUseObjTypeCode` |  | |  |  |  |  |
| `SEPAMandateFirstUsePaymentDoc` |  | |  |  |  |  |
| `SEPAMandateLastUseDate` |  | |  |  |  |  |
| `SEPAMandateLastUseObjTypeCode` |  | |  |  |  |  |
| `SEPAMandateLastUsePaymentDoc` |  | |  |  |  |  |
| `SEPAMandateFirstUsePaymentRun` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | | `_Customer` | `IsBusinessPurposeCompleted` |  |  |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTSEPAMANDATE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED 
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern:#NONE                                    
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Customer SEPA Mandate'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view  I_CustomerSEPAMandate as
 select from I_SEPAMandate 
 
  association [1..1] to I_Customer    as _Customer    on  $projection.Customer = _Customer.Customer

 {
      key SEPAMandateSender                           as Customer,              
      key SEPAMandate,
      key SEPAMandateSenderIBAN,
      key SEPAMandateVersion,
          SEPAMandateSenderBankSWIFTCode,
          SEPAMandateUUID,
          ValidityStartDate,       
          ValidityEndDate,
          SEPAPaymentType,     
          SEPAMandateStatus,
          SEPAMandateIsB2BMandate,
          OriginalSEPAMandateCreditor,
          OriginalSEPAMandate, 
          SEPAMandateApplication, 
          SEPAMandateReferenceType, 
          SEPAMandateReference,
          SEPAMandateSenderType,
          SEPAMandateRecipientType,
          SEPAMandateRecipient, 
          SEPAMandateCreditor, 
          SEPAMandateFirstUseDate,
          SEPAMandateFirstUseObjTypeCode,
          SEPAMandateFirstUsePaymentDoc,
          SEPAMandateLastUseDate,
          SEPAMandateLastUseObjTypeCode, 
          SEPAMandateLastUsePaymentDoc,     
          SEPAMandateFirstUsePaymentRun,
          
          //added for DCL
          @UI.hidden: true
          @Consumption.filter.hidden: true  
          @Semantics.booleanIndicator:true
          _Customer.IsBusinessPurposeCompleted,
      
          _Customer
                          
}
  where SEPAMandateApplication = 'F'
      and SEPAMandateSenderType = 'BUS3007'
```
