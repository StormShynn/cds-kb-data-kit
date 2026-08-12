---
name: C_BANKPOWEROFATTORNEYFDP
description: "This CDS view is used during the creation of a PDF for powers of attorney and provides the header information of powers of attorney, such as the ID, the authorization group, valid-from date, the payment approval rule, the power of attorney type, and the bank account assignment type of the powers of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPOWEROFATTORNEYFDP')/$value
semantic_en: "This CDS view is used during the creation of a PDF for powers of attorney and provides the header information of powers of attorney, such as the ID, the authorization group, valid-from date, the payment approval rule, the power of attorney type, and the bank account assignment type of the powers of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "POA Header Form Data Provider — CDS view tiêu dùng dựa trên I_BankPowerOfAttorney."
keywords:
  - "poa"
  - "header"
  - "form"
  - "data"
  - "provider"
  - "bank"
  - "power"
  - "attorney"
  - "authorization"
  - "group"
  - "validity"
  - "start"
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
  - payment
  - bo:purchaseorder
---
# C_BANKPOWEROFATTORNEYFDP

**This CDS view is used during the creation of a PDF for powers of attorney and provides the header information of powers of attorney, such as the ID, the authorization group, valid-from date, the payment approval rule, the power of attorney type, and the bank account assignment type of the powers of attorney. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPOWEROFATTORNEYFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BankPowerOfAttorney` |  | |  |  | `CHAR(20)` | Power of Attorney ID |
| `BkPOAAuthorizationGroup` |  | |  |  | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `BkPOAAdjustedValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `BankPowerOfAttorneyType` |  | |  |  | `CHAR(4)` | Power of Attorney Type |
| `BkPOABankAccountAssignmentType` |  | |  |  | `CHAR(2)` | Bank Account Assignment Type |
| `BankPowerOfAttorneyName` |  | |  |  | `CHAR(40)` | Power of Attorney Description |
| `PaymentApprovalRule` |  | |  |  | `CHAR(20)` | Payment Approval Rule ID |
| `_AuthorizedRepresentative` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Activity` | | ✓ | | | | |
| `_BankAccount` | | ✓ | | | | |
| `_Predecessor` | | ✓ | | | | |
| `_PaymentApprovalRule` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AuthorizedRepresentative` | `C_BkPOAAuthzdRepresentativeFDP` | [0..*] |
| `_CompanyCode` | `C_BkPOACompanyCodeFDP` | [0..*] |
| `_Activity` | `C_BkPOAActivityAssignmentFDP` | [0..*] |
| `_BankAccount` | `C_BkPOABankAccountFDP` | [0..*] |
| `_Predecessor` | `C_BkPOAPredecessorFDP` | [0..*] |
| `_PaymentApprovalRule` | `C_PaymentApprovalRuleFDP` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPOWEROFATTORNEYFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPOWEROFATTORNEYFDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'POA Header Form Data Provider'
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #CONSUMPTION }
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #MASTER
}
@ObjectModel.modelingPattern:           #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_FORM_DATA_PROVIDER   ]

define view entity C_BankPowerOfAttorneyFDP
  as select from I_BankPowerOfAttorney
  // all associations in the FDP model must be unidirectional, as circular associations would result in an endless loop during FDP execution
  association [0..*] to C_BkPOAAuthzdRepresentativeFDP as _AuthorizedRepresentative on $projection.BankPowerOfAttorneyUUID = _AuthorizedRepresentative.BankPowerOfAttorneyUUID
  association [0..*] to C_BkPOACompanyCodeFDP          as _CompanyCode              on $projection.BankPowerOfAttorneyUUID = _CompanyCode.BankPowerOfAttorneyUUID
  association [0..*] to C_BkPOAActivityAssignmentFDP   as _Activity                 on $projection.BankPowerOfAttorneyUUID = _Activity.BankPowerOfAttorneyUUID
  association [0..*] to C_BkPOABankAccountFDP          as _BankAccount              on $projection.BankPowerOfAttorneyUUID = _BankAccount.BankPowerOfAttorneyUUID
  association [0..*] to C_BkPOAPredecessorFDP          as _Predecessor              on $projection.BankPowerOfAttorneyUUID = _Predecessor.BankPowerOfAttorneyUUID
  association [0..1] to C_PaymentApprovalRuleFDP       as _PaymentApprovalRule      on $projection.PaymentApprovalRule = _PaymentApprovalRule.PaymentApprovalRule
{
  key BankPowerOfAttorneyUUID,
      BankPowerOfAttorney,
      // for DCL
      BkPOAAuthorizationGroup,
      ValidityStartDate,
      ValidityEndDate,
      BkPOAAdjustedValidityEndDate,
      BankPowerOfAttorneyType,
      _BkPOAType._Text[1:Language = $session.system_language].BankPowerOfAttorneyTypeName,
      BkPOABankAccountAssignmentType,
      _BkPOABkAcctAssignmentTypeTxt[1:Language = $session.system_language].BkPOABkAcctAssignmentTypeName,
      BankPowerOfAttorneyName,
      PaymentApprovalRule,
      _AuthorizedRepresentative,
      _CompanyCode,
      _Activity,
      _BankAccount,
      _Predecessor,
      _PaymentApprovalRule
}
where
  BankPowerOfAttorneyIsBlocked <> 'X'
```
