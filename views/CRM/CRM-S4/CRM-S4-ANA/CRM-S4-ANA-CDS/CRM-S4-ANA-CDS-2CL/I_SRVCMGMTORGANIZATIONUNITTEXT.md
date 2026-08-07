---
name: I_SRVCMGMTORGANIZATIONUNITTEXT
description: "Srvcmgmtorganizationunittext"
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - text
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_SRVCMGMTORGANIZATIONUNITTEXT

**Srvcmgmtorganizationunittext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrgUnitTypeIDConcatenated` | ✓ | |  | `otjid` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `OrganizationalUnit` |  | |  | `objid` |  |  |
| `StartDate` |  | |  | `begda` |  |  |
| `EndDate` |  | |  | `endda` |  |  |
| `OrganizationalUnitShortName` |  | |  | `short` |  |  |
| `OrganizationalUnitName` |  | |  | `stext` |  |  |
| `_SrvcMgmtOrganizationUnit` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcMgmtOrganizationUnit` | `I_SrvcMgmtOrganizationUnit` | [1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Srvc Mgmt Organizational Unit - Text'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'OrgUnitTypeIDConcatenated',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #L
   },
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE,
   #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.technicalName: 'ISRVCORGUNITTXT'

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SrvcMgmtOrganizationUnitText
  as select from hrp1000
  association [1]    to I_SrvcMgmtOrganizationUnit as _SrvcMgmtOrganizationUnit on $projection.OrgUnitTypeIDConcatenated = _SrvcMgmtOrganizationUnit.OrgUnitTypeIDConcatenated
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language

{
        @ObjectModel.foreignKey.association: '_SrvcMgmtOrganizationUnit'
  key   otjid as OrgUnitTypeIDConcatenated,
        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
  key   langu as Language,
        objid as OrganizationalUnit,
        begda as StartDate,
        endda as EndDate,      
        short as OrganizationalUnitShortName,
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Semantics.text: true
        stext as OrganizationalUnitName,

        _SrvcMgmtOrganizationUnit,
        _Language

}
where
      hrp1000.otype = 'O'
  and hrp1000.istat = '1'
  and plvar         = '01'
  and begda         <= $session.system_date
  and endda         >= $session.system_date
```
