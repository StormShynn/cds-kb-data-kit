---
name: I_BANKPOWEROFATTORNEY
description: "This CDS view provides the header data of powers of attorney for banking transactions as well as the creation and change data. This CDS view provides the data to answer the following business questions: Which powers of attorney for banking transactions exist? Which payment approval rule is assigned to the power of attorney for banking transactions? What is the validity period of a power of attorney for banking transactions? Who created the power of attorney for banking transactions? When was the power of attorney for banking transactions created? By whom and when was the power of attorney for banking transactions last changed? Is a power of attorney for banking transactions blocked? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKPOWEROFATTORNEY')/$value
semantic_en: "This CDS view provides the header data of powers of attorney for banking transactions as well as the creation and change data. This CDS view provides the data to answer the following business questions: Which powers of attorney for banking transactions exist? Which payment approval rule is assigned to the power of attorney for banking transactions? What is the validity period of a power of attorney for banking transactions? Who created the power of attorney for banking transactions? When was the power of attorney for banking transactions created? By whom and when was the power of attorney for banking transactions last changed? Is a power of attorney for banking transactions blocked? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "POA for Banking Transactions — CDS view giao diện dựa trên fclmpoa_hd."
keywords:
  - "poa"
  - "for"
  - "banking"
  - "transactions"
  - "bank"
  - "power"
  - "attorney"
  - "validity"
  - "start"
  - "date"
  - "adjusted"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - payment
  - transaction
  - bo:purchaseorder
---
# I_BANKPOWEROFATTORNEY

**This CDS view provides the header data of powers of attorney for banking transactions as well as the creation and change data. This CDS view provides the data to answer the following business questions: Which powers of attorney for banking transactions exist? Which payment approval rule is assigned to the power of attorney for banking transactions? What is the validity period of a power of attorney for banking transactions? Who created the power of attorney for banking transactions? When was the power of attorney for banking transactions created? By whom and when was the power of attorney for banking transactions last changed? Is a power of attorney for banking transactions blocked? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKPOWEROFATTORNEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  | `poa_uuid` | `RAW(16)` | Power of Attorney UUID |
| `BankPowerOfAttorney` |  | |  | `poa_id` | `CHAR(20)` | Power of Attorney ID |
| `ValidityStartDate` |  | |  | `valid_from` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  | `valid_to` | `DATS(8)` | Valid-To Date |
| `BkPOAAdjustedValidityEndDate` |  | |  | `case when valid_to is initial then '99991231' else valid_to end` | `DATS(8)` | Valid-To Date |
| `BkPOABankAccountAssignmentType` |  | |  | `ba_assignment` | `CHAR(2)` | Bank Account Assignment Type |
| `BankPowerOfAttorneyName` |  | |  | `description` | `CHAR(40)` | Power of Attorney Description |
| `BankPowerOfAttorneyStatus` |  | |  | `status` | `CHAR(2)` | Power of Attorney Status |
| `BkPOAAuthorizationGroup` |  | |  | `auth_group` | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `PaymentApprovalRule` |  | |  | `par_id` | `CHAR(20)` | Payment Approval Rule ID |
| `LastChangeDateTime` |  | |  | `last_changed_tstmp_utc` | `DEC(15)` | Power of Attorney: Change Timestamp |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `creation_tstmp_utc` | `DEC(15)` | Power of Attorney: Creation Timestamp |
| `LastChangedByUser` |  | |  | `last_changed_by` | `CHAR(12)` | Changed By |
| `LocalLastChangeDateTime` |  | |  | `local_last_changed_tstmp_utc` | `DEC(15)` | Power of Attorney: Local Change Timestamp |
| `BkPOARtntnPeriodStartDateTime` |  | |  | `ret_period_begin_tstmp` | `DEC(15)` | Power of Attorney: Start of Retention Period Timestamp |
| `BankPowerOfAttorneyIsBlocked` |  | |  | `is_blocked` | `CHAR(1)` | Power of Attorney: Blocking Indicator |
| `BankPowerOfAttorneyType` |  | |  | `poa_type` | `CHAR(4)` | Power of Attorney Type |
| `_BkPOAAuthzdRepresentative` | | ✓ | | | | |
| `_BkPOACompanyCode` | | ✓ | | | | |
| `_BkPOABankAccountSelection` | | ✓ | | | | |
| `_BkPOABankAccount` | | ✓ | | | | |
| `_BkPOAStatusText` | | ✓ | | | | |
| `_BkPOAActivityAssignment` | | ✓ | | | | |
| `_BkPOABkAcctAssignmentTypeTxt` | | ✓ | | | | |
| `_BkPOAAuthorizationGroupTxt` | | ✓ | | | | |
| `_BkPOAPredecessor` | | ✓ | | | | |
| `_BkPOASuccessor` | | ✓ | | | | |
| `_BkPOAType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BkPOAAuthzdRepresentative` | `I_BkPOAAuthzdRepresentative` | [0..*] |
| `_BkPOACompanyCode` | `I_BkPOACompanyCode` | [0..*] |
| `_BkPOABankAccountSelection` | `I_BkPOABankAccountSelection` | [0..*] |
| `_BkPOABankAccount` | `I_BkPOABankAccount` | [0..*] |
| `_BkPOAStatusText` | `I_BkPOAStatusText` | [0..*] |
| `_BkPOAActivityAssignment` | `I_BkPOAActivityAssignment` | [0..*] |
| `_BkPOABkAcctAssignmentTypeTxt` | `I_BkPOABkAcctAssignmentTypeTxt` | [0..*] |
| `_BkPOAAuthorizationGroupTxt` | `I_BkPOAAuthorizationGroupTxt` | [0..*] |
| `_BkPOAPredecessor` | `I_BkPOAPredecessor` | [0..*] |
| `_BkPOASuccessor` | `I_BkPOAPredecessor` | [0..1] |
| `_BkPOAType` | `I_BankPowerOfAttorneyType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKPOWEROFATTORNEY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKPOWEROFATTORNEY')/$value)*

```abap
@EndUserText.label: 'POA for Banking Transactions'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType:{ serviceQuality: #B,
                         sizeCategory:   #S,
                         dataClass:      #MASTER }
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view entity I_BankPowerOfAttorney
  as select from fclmpoa_hd

  association [0..*] to I_BkPOAAuthzdRepresentative    as _BkPOAAuthzdRepresentative    on $projection.BankPowerOfAttorneyUUID = _BkPOAAuthzdRepresentative.BankPowerOfAttorneyUUID
  association [0..*] to I_BkPOACompanyCode             as _BkPOACompanyCode             on $projection.BankPowerOfAttorneyUUID = _BkPOACompanyCode.BankPowerOfAttorneyUUID
  association [0..*] to I_BkPOABankAccountSelection    as _BkPOABankAccountSelection    on $projection.BankPowerOfAttorneyUUID = _BkPOABankAccountSelection.BankPowerOfAttorneyUUID
  association [0..*] to I_BkPOABankAccount             as _BkPOABankAccount             on $projection.BankPowerOfAttorneyUUID = _BkPOABankAccount.BankPowerOfAttorneyUUID
  association [0..*] to I_BkPOAStatusText              as _BkPOAStatusText              on $projection.BankPowerOfAttorneyStatus = _BkPOAStatusText.BankPowerOfAttorneyStatus
  association [0..*] to I_BkPOAActivityAssignment      as _BkPOAActivityAssignment      on $projection.BankPowerOfAttorneyUUID = _BkPOAActivityAssignment.BankPowerOfAttorneyUUID
  association [0..*] to I_BkPOABkAcctAssignmentTypeTxt as _BkPOABkAcctAssignmentTypeTxt on $projection.BkPOABankAccountAssignmentType = _BkPOABkAcctAssignmentTypeTxt.BkPOABankAccountAssignmentType
  association [0..*] to I_BkPOAAuthorizationGroupTxt   as _BkPOAAuthorizationGroupTxt   on $projection.BkPOAAuthorizationGroup = _BkPOAAuthorizationGroupTxt.BkPOAAuthorizationGroup
  association [0..*] to I_BkPOAPredecessor             as _BkPOAPredecessor             on $projection.BankPowerOfAttorneyUUID = _BkPOAPredecessor.BankPowerOfAttorneyUUID
  association [0..1] to I_BkPOAPredecessor             as _BkPOASuccessor               on $projection.BankPowerOfAttorney = _BkPOASuccessor.BankPowerOfAttorneyPredecessor
  association [0..1] to I_BankPowerOfAttorneyType      as _BkPOAType                    on $projection.BankPowerOfAttorneyType = _BkPOAType.BankPowerOfAttorneyType
{
  key poa_uuid                          as BankPowerOfAttorneyUUID,
      poa_id                            as BankPowerOfAttorney,
      valid_from                        as ValidityStartDate,
      valid_to                          as ValidityEndDate,
      case when valid_to is initial then '99991231'
                                    else valid_to
                                    end as BkPOAAdjustedValidityEndDate,
      ba_assignment                     as BkPOABankAccountAssignmentType,
      description                       as BankPowerOfAttorneyName,
      status                            as BankPowerOfAttorneyStatus,
      auth_group                        as BkPOAAuthorizationGroup,
      par_id                            as PaymentApprovalRule,
      last_changed_tstmp_utc            as LastChangeDateTime,
      created_by                        as CreatedByUser,
      creation_tstmp_utc                as CreationDateTime,
      last_changed_by                   as LastChangedByUser,
      local_last_changed_tstmp_utc      as LocalLastChangeDateTime,
      ret_period_begin_tstmp            as BkPOARtntnPeriodStartDateTime,
      is_blocked                        as BankPowerOfAttorneyIsBlocked,
      poa_type                          as BankPowerOfAttorneyType,
      _BkPOAAuthzdRepresentative,
      _BkPOACompanyCode,
      _BkPOABankAccountSelection,
      _BkPOABankAccount,
      _BkPOAActivityAssignment,
      _BkPOAStatusText,
      _BkPOABkAcctAssignmentTypeTxt,
      _BkPOAAuthorizationGroupTxt,
      _BkPOAPredecessor,
      _BkPOASuccessor,
      _BkPOAType
}
```
