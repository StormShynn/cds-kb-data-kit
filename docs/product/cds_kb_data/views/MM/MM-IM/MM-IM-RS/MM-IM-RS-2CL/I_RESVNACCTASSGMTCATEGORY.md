---
name: I_RESVNACCTASSGMTCATEGORY
description: "Resvnacctassgmtcategory"
app_component: MM-IM-RS-2CL
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
  - MM
  - MM-IM
  - MM-IM-RS
  - interface-view
  - component:MM-IM-RS-2CL
  - lob:Sourcing & Procurement
---
# I_RESVNACCTASSGMTCATEGORY

**Resvnacctassgmtcategory**

| Property | Value |
|---|---|
| App Component | `MM-IM-RS-2CL` |
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
| `ResvnAcctAssgmtCategory` | ✓ | |  | `cast( dd07l.domvalue_l as rstyp )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
              dataCategory: #DIMENSION,
              dataExtraction.enabled: true,
              internalName: #LOCAL,
              technicalName: 'IRESVNAAC'
            }
@EndUserText.label: 'Account Assignment Category'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
                dataCategory: #VALUE_HELP,
                modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'ResvnAcctAssgmtCategory',
                resultSet.sizeCategory: #XS,
                sapObjectNodeType.name: 'ResvnAcctAssignmentCategory',
                supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER],
                usageType: {
                              serviceQuality: #A,
                              dataClass: #META,
                              sizeCategory: #S
                            }
              }
@Search.searchable: true
@VDM: {
        lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC
      }
define root view entity I_ResvnAcctAssgmtCategory
  as select from dd07l
  composition [0..*] of I_ResvnAcctAssgmtCategoryText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as rstyp )                     as ResvnAcctAssgmtCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      _Text
}
where
      dd07l.domname  = 'RSTYP'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
