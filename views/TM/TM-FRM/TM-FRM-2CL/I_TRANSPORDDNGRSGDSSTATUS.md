---
name: I_TRANSPORDDNGRSGDSSTATUS
description: Transporddngrsgdsstatus
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - status
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDDNGRSGDSSTATUS

**Transporddngrsgdsstatus**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrderDngrsGdsSts` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_tor_dg_status preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText:   {label:              'Transp Order Dangerous Goods Status'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'ITORDGSTS'
@ObjectModel:   {representativeKey:  'TranspOrderDngrsGdsSts',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 resultSet.sizeCategory:#XS,
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}
@ObjectModel.sapObjectNodeType.name: 'TranspOrdDangerousGoodsStatus'
define root view entity I_TranspOrdDngrsGdsStatus

  as select from dd07l
  composition [0..*] of I_TranspOrdDngrsGdsStatusText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_tor_dg_status preserving type ) as TranspOrderDngrsGdsSts,
      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/DG_STATUS'
  and as4local = 'A';
```
