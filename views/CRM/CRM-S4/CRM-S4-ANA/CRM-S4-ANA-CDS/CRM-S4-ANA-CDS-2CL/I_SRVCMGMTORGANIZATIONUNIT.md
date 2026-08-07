---
name: I_SRVCMGMTORGANIZATIONUNIT
description: Srvcmgmtorganizationunit
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_SRVCMGMTORGANIZATIONUNIT

**Srvcmgmtorganizationunit**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OrgUnitTypeIDConcatenated` | ✓ | |  | `otjid` |
| `OrganizationalUnit` |  | |  | `objid` |
| `Language` |  | |  | `langu` |
| `StartDate` |  | |  | `begda` |
| `EndDate` |  | |  | `endda` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SrvcMgmtOrganizationUnitText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Service Management Organizational Unit'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'OrgUnitTypeIDConcatenated',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #L
   },
   supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@Search.searchable: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ISRVCORGUNIT'
@Analytics.internalName: #LOCAL

define view entity I_SrvcMgmtOrganizationUnit
  as select from hrp1000
  association [0..*] to I_SrvcMgmtOrganizationUnitText as _Text        on  $projection.OrgUnitTypeIDConcatenated = _Text.OrgUnitTypeIDConcatenated

{
           @Search.defaultSearchElement: true
           @ObjectModel.text.association: '_Text'
           @Search.fuzzinessThreshold: 0.8
           @Search.ranking: #HIGH
  key      otjid as OrgUnitTypeIDConcatenated,
           objid as OrganizationalUnit,
           langu as Language,
           begda as StartDate,
           endda as EndDate,

           _Text
}
where
      hrp1000.otype = 'O'
  and hrp1000.istat = '1'
  and plvar         = '01'
  and begda         <= $session.system_date
  and endda         >= $session.system_date
```
