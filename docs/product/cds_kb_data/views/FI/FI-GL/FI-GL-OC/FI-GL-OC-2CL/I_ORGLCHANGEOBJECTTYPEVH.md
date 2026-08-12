---
name: I_ORGLCHANGEOBJECTTYPEVH
description: "Orglchangeobjecttypevh"
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - value-help
  - component:FI-GL-OC-2CL
  - lob:Finance
---
# I_ORGLCHANGEOBJECTTYPEVH

**Orglchangeobjecttypevh**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrglChangeObjectTypeName` | ✓ | |  | `case when _Text[1:Language=$session.system_language].OrglChangeObjectTypeName is null then _Text[1:Language='E'].OrglChangeObjectTypeName else _Text[1:Language=$session.system_language].OrglChangeObjectTypeName end` |  |  |
| `OrganizationalChangeObjectType` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IOCHOTVH'
@EndUserText.label: 'OrganizationalChange Object Type'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'OrganizationalChangeObjectType'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #B,
  sizeCategory: #S
}
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.resultSet.sizeCategory:      #XS
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
//@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

@Consumption.ranked: true


define view I_OrglChangeObjectTypeVH
  as select from I_OrglChangeObjectType
{

       @UI.hidden: true
       @Semantics.text:true
  key  case when _Text[1:Language=$session.system_language].OrglChangeObjectTypeName is null
              then  _Text[1:Language='E'].OrglChangeObjectTypeName
              else  _Text[1:Language=$session.system_language].OrglChangeObjectTypeName
       end as OrglChangeObjectTypeName,

       @UI.textArrangement: #TEXT_ONLY
       @ObjectModel.text.element: ['OrglChangeObjectTypeName']
  key  OrganizationalChangeObjectType


}
where
     OrganizationalChangeObjectType = 'VX'
  or OrganizationalChangeObjectType = 'X5'
  or OrganizationalChangeObjectType = 'X3'
  or OrganizationalChangeObjectType = 'X4'
  or OrganizationalChangeObjectType = 'X1'
  or OrganizationalChangeObjectType = 'PM'
  or OrganizationalChangeObjectType = 'PO'
  or OrganizationalChangeObjectType = 'VB'
  or OrganizationalChangeObjectType = 'SV'
  or OrganizationalChangeObjectType = 'PR'
  or OrganizationalChangeObjectType = 'IS'
```
