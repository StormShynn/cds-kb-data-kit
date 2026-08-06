---
name: I_CREDITMANAGEMENTSEGMENTTXT
description: Credit ManagementMENTSEGMENTTXT
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CREDITMANAGEMENTSEGMENTTXT

**Credit ManagementMENTSEGMENTTXT**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CreditSegment` | `cast( credit_sgmnt as farp_credit_segment preserving type)` |
| key `Language` | `langu` |
| `CreditSegmentName` | `credit_sgmnt_txt` |

## Source Code

```abap
@EndUserText.label: 'Credit Management Segment - Text'
@AbapCatalog.sqlViewName: 'ICREDMGMNTSEGMT'
@VDM.viewType: #BASIC
//@VDM.private: false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CreditSegment'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@Search: { searchable: true }
define view I_CreditManagementSegmentTxt
  as select from ukmcred_sgm0t
{
  key cast( credit_sgmnt as farp_credit_segment preserving type) as CreditSegment,

      @Semantics.language: true
  key langu                                                      as Language,

      @Semantics.text: true
      @Search: { defaultSearchElement: true,
           fuzzinessThreshold:   0.8,
           ranking:              #LOW }
      credit_sgmnt_txt                                           as CreditSegmentName
};
```
