---
name: I_CASECURITYDEPOSITREQRSNTEXT
description: "Casecuritydepositreqrsntext"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASECURITYDEPOSITREQRSNTEXT

**Casecuritydepositreqrsntext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CASecurityDepositRequestReason` | ✓ | |  | `reason` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CASecurityDepositReqReasonText` |  | |  | `cast ( text as req_reason_txt_kk )` |  |  |
| `_CASecurityDepositRequestRsn` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CASecurityDepositRequestRsn` | `I_CASecurityDepositReqRsn` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICASECDEPREQRSNT'

@EndUserText.label: 'Security Deposit Request Reason - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CASecurityDepositRequestReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S } }
                             
@VDM.viewType: #BASIC

define view entity I_CASecurityDepositReqRsnText 
  as select from tfk_sec_reason_t
  
  association [1..1] to I_CASecurityDepositReqRsn     as _CASecurityDepositRequestRsn on $projection.CASecurityDepositRequestReason = _CASecurityDepositRequestRsn.CASecurityDepositRequestReason
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CASecurityDepositRequestRsn'
  key reason  as CASecurityDepositRequestReason,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras   as Language,

      @Semantics.text
       cast ( text    as req_reason_txt_kk ) as CASecurityDepositReqReasonText,

      _Language,
      _CASecurityDepositRequestRsn
}
```
