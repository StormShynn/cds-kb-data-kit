---
name: I_RESTARTFREQUENCYWEEK
description: "Restartfrequencyweek"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_RESTARTFREQUENCYWEEK

**Restartfrequencyweek**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REStartFrequencyWeek` | ✓ | |  | `cast( dd07l.domvalue_l as recdvdmweekfrom )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRESTFREQWEEK'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{
            dataCategory: #DIMENSION,
            dataExtraction.enabled: true,
            internalName: #LOCAL
            }

@EndUserText.label: 'Real Estate Start Frequency Week'

@ObjectModel: {
                usageType:{
                          serviceQuality: #A,
                          dataClass: #META,
                          sizeCategory: #S
                          },
                dataCategory: #VALUE_HELP,
                representativeKey: 'REStartFrequencyWeek',
                resultSet.sizeCategory: #XS,
                sapObjectNodeType.name: 'REFrequencyStartWeekday',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #EXTRACTION_DATA_SOURCE],
               modelingPattern: #ANALYTICAL_DIMENSION
              }    
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view entity I_REStartFrequencyWeek
  as select from dd07l
  composition [0..*] of I_REStartFrequencyWeekText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as recdvdmweekfrom ) as REStartFrequencyWeek,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                         as DomainValue,
      _Text
}
where
      dd07l.domname  = 'RECDWEEKDAYS'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
