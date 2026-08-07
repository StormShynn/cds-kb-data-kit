---
name: I_RESVNACCTASSGMTCATEGORY
description: "Resvnacctassgmtcategory"
app_component: MM-IM-RS-2CL
software_component: SAPSCORE
release_state: released
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
