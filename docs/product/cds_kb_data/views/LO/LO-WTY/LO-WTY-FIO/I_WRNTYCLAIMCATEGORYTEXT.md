---
name: I_WRNTYCLAIMCATEGORYTEXT
description: "Wrntyclaimcategorytext"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - text-view
  - text
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMCATEGORYTEXT

**Wrntyclaimcategorytext**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Claim Category - Txt'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IWRNTYDOMTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType:
 {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #M
}
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@VDM: {
  //viewType: #BASIC, *******Modernization Task********
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_WrntyClaimCategoryText
  as select from dd07t
  association [1..1] to I_WrntyClaimCategory as _WrntyClaimCategory on $projection.ClaimCategory = _WrntyClaimCategory.ClaimCategory
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
       @Semantics.language: true
  key  ddlanguage as Language,
  key  domvalue_l as ClaimCategory,
       @Semantics.text:true
       ddtext     as WrntyClaimCategoryText,
       _WrntyClaimCategory ,
       _Language
}

where
      dd07t.domname  = 'WTY_KATEG'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
