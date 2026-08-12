---
name: I_IT_ELECTRONICDOCREJECTCODE
description: "IT Electronicdocrejectcode"
app_component: CA-GTF-CSC-EDO-IT
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
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-IT
  - lob:Cross-Application Components
---
# I_IT_ELECTRONICDOCREJECTCODE

**IT Electronicdocrejectcode**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-IT` |
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
| `IT_ElectronicDocRejectionCode` | ✓ | |  | `cast(domvalue_l as edoc_it_reject_code)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `IT_ElectronicDocRejectCodeText` |  | |  | `ddtext` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Italy Electronic Rejection Code'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'IT_ElectronicDocRejectionCode'
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]  
                                  
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER                            

@ObjectModel.dataCategory: #TEXT

define view entity I_IT_ElectronicDocRejectCode as select from dd07t
{
   
  @ObjectModel: { text.element:  [ 'IT_ElectronicDocRejectCodeText' ]}
  key cast(domvalue_l as edoc_it_reject_code) as IT_ElectronicDocRejectionCode,
  @Semantics.language
  @UI.hidden: true
  key ddlanguage as Language,
 
  @Semantics.text: true
  @EndUserText.label: 'Rejection Code Description' 
  ddtext                            as IT_ElectronicDocRejectCodeText

}
where
      domname  = 'EDOC_IT_REJECT_CODE'
  and ddlanguage = $session.system_language
  and as4local = 'A'
```
