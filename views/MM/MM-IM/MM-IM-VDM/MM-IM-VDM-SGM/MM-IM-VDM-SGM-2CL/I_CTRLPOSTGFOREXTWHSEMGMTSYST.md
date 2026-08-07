---
name: I_CTRLPOSTGFOREXTWHSEMGMTSYST
description: Ctrlpostgforextwhsemgmtsyst
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_CTRLPOSTGFOREXTWHSEMGMTSYST

**Ctrlpostgforextwhsemgmtsyst**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CtrlPostgForExtWhseMgmtSyst` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as bfwms)` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CtrlPostgExtWhseMgmtSystTxt` | [0..*] |

## Source Code

```abap
@Analytics: { technicalName: 'ICtrlPostgForEWM',
              dataExtraction.enabled:true,
              dataCategory: #DIMENSION,
              internalName:#LOCAL }

@EndUserText.label: 'Control Postg for Ext Whse Mgmt Syst'

@Consumption.ranked: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #VALUE_HELP,
                modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CtrlPostgForExtWhseMgmtSyst',
                resultSet.sizeCategory: #XS,
                supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER],
                usageType: { serviceQuality: #A, 
                             dataClass: #META, 
                             sizeCategory: #S },
                sapObjectNodeType.name: 'CtrlPostgForExtWhseMgmtSyst' }

@Search.searchable: true

@VDM: {lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
define view entity I_CtrlPostgForExtWhseMgmtSyst 
  as select from dd07l

  association [0..*] to I_CtrlPostgExtWhseMgmtSystTxt as _Text on $projection.CtrlPostgForExtWhseMgmtSyst = _Text.CtrlPostgForExtWhseMgmtSyst
{
    @ObjectModel.text.association: '_Text'
     @Search.defaultSearchElement: true
     @Search.ranking: #HIGH
     @Search.fuzzinessThreshold: 0.8
    key cast(substring(domvalue_l, 1, 1) as bfwms) as CtrlPostgForExtWhseMgmtSyst,

    //Associations
     _Text
    
}
where domname  = 'BFWMS'
  and as4local = 'A'
  and as4vers  = '0000';
```
