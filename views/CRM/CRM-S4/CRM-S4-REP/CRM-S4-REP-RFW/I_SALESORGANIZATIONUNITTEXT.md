---
name: I_SALESORGANIZATIONUNITTEXT
description: Sales OrganizationUNITTEXT
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - sales-organization
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
  - bo:SalesOrganization
---
# I_SALESORGANIZATIONUNITTEXT

**Sales OrganizationUNITTEXT**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrganizationalUnit` | ✓ | |  | `objid` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `StartDate` |  | |  | `begda` |  |  |
| `EndDate` |  | |  | `endda` |  |  |
| `OrganizationalUnitShortName` |  | |  | `short` |  |  |
| `OrganizationalUnitName` |  | |  | `stext` |  |  |
| `OrgUnitTypeIDConcatenated` |  | |  | `otjid` |  |  |
| `_SalesOrganizationUnit` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganizationUnit` | `I_SalesOrganizationUnit` | [1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sales Organizational Unit - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISALESORGUNITTXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'OrganizationalUnit',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #L
   },
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, 
   #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
//@Metadata.allowExtensions:true

define view I_SalesOrganizationUnitText
  as select distinct from hrp1000
  association [1]    to I_SalesOrganizationUnit as _SalesOrganizationUnit on $projection.OrganizationalUnit = _SalesOrganizationUnit.OrganizationalUnit
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SalesOrganizationUnit'
  key objid as OrganizationalUnit,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu as Language,
      begda as StartDate,
      endda as EndDate,
      short as OrganizationalUnitShortName,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text: true
      stext as OrganizationalUnitName,
      otjid as OrgUnitTypeIDConcatenated,

      _SalesOrganizationUnit,
      _Language

}
where
      hrp1000.otype = 'O'
  and hrp1000.istat = '1'
  and plvar         = '01'
  and begda         <= $session.system_date
  and endda         >= $session.system_date
```
