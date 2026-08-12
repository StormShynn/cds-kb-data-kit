---
name: I_WRNTYCLAIMVERSIONCATEGORYTXT
description: "Wrntyclaimversioncategorytxt"
app_component: LO-WTY-FIO
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
