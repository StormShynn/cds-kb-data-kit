---
name: I_SUPPLIERACCOUNTGROUP
description: "Supplieraccountgroup"
app_component: LO-MD-BP-2CL
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
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - supplier
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIERACCOUNTGROUP

**Supplieraccountgroup**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
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
| `SupplierAccountGroup` | ✓ | |  | `ktokk` |  |  |
| `BPSchemaPurgOrganizationLevel` |  | |  | `parge` |  |  |
| `SupplierAccountGroupOID` |  | |  | `case when I_MdiOidConfiguration.Context is initial or I_MdiOidConfiguration.ComposeOid is initial then cast( t077k.ktokk as supplieraccountgroup_oid ) when I_MdiOidConfiguration.Context is not initial and I_MdiOidConfiguration.ComposeOid is not initial then cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), t077k.ktokk ) as supplieraccountgroup_oid ) end` |  |  |
| `_SupplierAccountGroupText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierAccountGroupText` | `I_SupplierAccountGroupText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Supplier Account Group' //same as DDL description
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
   automatic : true
         }
      }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.sapObjectNodeType.name: 'SupplierAccountGroup'
@ObjectModel.representativeKey: 'SupplierAccountGroup'
@AbapCatalog.sqlViewName: 'ISUPPLACCGRP' //must start with "I"
@Search.searchable: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #SEARCHABLE_ENTITY,
                                     #EXTRACTION_DATA_SOURCE]                                    
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION  
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.alternativeKey:[{id:'OID',uniqueness:#UNIQUE,element:['SupplierAccountGroupOID']}]
@ObjectModel.objectIdentifier.oidElement:'SupplierAccountGroupOID'
define view I_SupplierAccountGroup //must start with "I_"; same as DDL source name in upper-camelcase notation
  as select from           t077k
    left outer to one join I_MdiOidConfiguration on I_MdiOidConfiguration.ObjectTypeCode = '4211'
  association [0..*] to I_SupplierAccountGroupText as _SupplierAccountGroupText on $projection.SupplierAccountGroup = _SupplierAccountGroupText.SupplierAccountGroup
{
      @ObjectModel.text.association: '_SupplierAccountGroupText'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key t077k.ktokk as SupplierAccountGroup,
      parge       as BPSchemaPurgOrganizationLevel,
      @ObjectModel.sort.enabled:false //ATC
      @ObjectModel.filter.enabled:false
      case when I_MdiOidConfiguration.Context is initial or I_MdiOidConfiguration.ComposeOid is initial then
      //Context ID is not specified
                cast( t077k.ktokk as supplieraccountgroup_oid )
           when I_MdiOidConfiguration.Context is not initial
                and I_MdiOidConfiguration.ComposeOid is not initial then
      //Context ID is specified
                cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), t077k.ktokk ) as supplieraccountgroup_oid )
      end         as SupplierAccountGroupOID,
      _SupplierAccountGroupText //expose the association for use by consumers


}
```
