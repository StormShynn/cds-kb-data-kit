---
name: I_WRNTYCLAIMVERSIONCATEGORYTXT
description: "Wrntyclaimversioncategorytxt"
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
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMVERSIONCATEGORYTXT

**Wrntyclaimversioncategorytxt**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Version category - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IWTYCLMVERCATTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE, 
                                      #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@Analytics.dataExtraction.enabled: true
@ObjectModel.usageType:
 {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #M
}
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
//@VDM.viewType: #BASIC *******Modernization Task********
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_WrntyClaimVersionCategoryTxt
  as select from dd07t
  association [1..1] to I_WarrantyClaimVersionCategory as _WrntyClaimCategory on $projection.WarrantyClaimVersionCategory = _WrntyClaimCategory.WarrantyClaimVersionCategory
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
       @Semantics.language: true
  key  ddlanguage as Language,
  //key  domvalue_l as ClaimCategory,
  key  cast(domvalue_l as abap.char( 2 )) as WarrantyClaimVersionCategory,
       @Semantics.text:true
       //ddtext     as WrntyClaimCategoryText,
       ddtext     as WrntyClaimVersionCategoryText,
       _WrntyClaimCategory ,
       _Language
}

where
      dd07t.domname  = 'WTY_KATEG'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
