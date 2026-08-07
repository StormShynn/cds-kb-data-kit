---
name: I_WRNTYCLAIMCOVERAGETYPETEXT
description: "Wrntyclaimcoveragetypetext"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
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
# I_WRNTYCLAIMCOVERAGETYPETEXT

**Wrntyclaimcoveragetypetext**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Coverage Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IWRNTYCOVGTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE, 
                                      #SEARCHABLE_ENTITY ]
@ObjectModel.usageType:
 {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #M
}
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
//@VDM.viewType: #BASIC *******Modernization Task********
@VDM.viewType: #COMPOSITE 
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */

define view entity I_WrntyClaimCoverageTypeText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
       @Semantics.language: true
  key  ddlanguage as Language,
  key  domvalue_l as WrntyClaimCoverageType,
       @Semantics.text:true
       ddtext     as WrntyClaimCoverageText,
       _Language
}
where
//      dd07t.domname  = 'WTY_COVERAGE_TYPE'
      dd07t.domname  = 'WTY_COVERAGE_TYPE_SUP'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
