---
name: I_BKPOACOMPANYCODETP_2
description: "BKPOACompany CodeTP 2"
semantic_vi: "View BKPOACompany CodeTP 2 cung cấp truy cập dữ liệu mã công ty liên quan đến quyền đại diện ngân hàng, bao gồm UUID mã công ty và quyền đại diện, và thông tin người dùng và thời gian戳 liên quan."
keywords:
  - "bank power of attorney"
  - "company code"
  - "fin-fscm-clm-bam-2cl"
  - "transactional processing"
  - "company-code"
  - "lob:other"
  - "bo:companycode"
  - "bank power of attorney uuid"
  - "company code uuid"
  - "power of attorney uuid"
semantic_en: "The BKPOACompany CodeTP 2 view provides access to company code data related to bank power of attorney, including company code and power of attorney UUIDs, and related user and timestamp information. It is used in the FIN-FSCM-CLM-BAM-2CL component for transactional processing."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - transactional-processing
  - company-code
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
  - bo:CompanyCode
---
# I_BKPOACOMPANYCODETP_2

**BKPOACompany CodeTP 2**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  |  |  |  |
| `BkPOACompanyCodeUUID` | ✓ | |  |  |  |  |
| `BkPOACompanyCode` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LocalLastChangeDateTime` |  | |  |  |  |  |
| `_BankPowerOfAttorney` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Company Codes of POA - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType: { serviceQuality: #B,
                            sizeCategory:   #S,
                            dataClass:      #MASTER },
               sapObjectNodeType.name: 'BankPowerOfAttorneyCompanyCode'}
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'CompanyCode' ],
  elementSuffix: 'BPC',
  quota: { maximumFields: 100, maximumBytes: 100000 }
}
@AbapCatalog.extensibility.allowNewCompositions
define view entity I_BkPOACompanyCodeTP_2
  as projection on R_BkPOACompanyCodeTP as CompanyCode
{
  key BankPowerOfAttorneyUUID,
  key BkPOACompanyCodeUUID,
      BkPOACompanyCode,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangeDateTime,
      /* Associations */
      _BankPowerOfAttorney: redirected to parent I_BankPowerOfAttorneyTP_2,
      _CompanyCode


}
```
